package com.green.jwt_board.controller;

import com.green.jwt_board.dto.MemberDTO;
import com.green.jwt_board.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Enumeration;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
  private final MemberService memberService;

  //회원가입 실행
  //form 태그 안의 input 태그 데이터를 @ModelAttribute 어노테이션을 사용
  @PostMapping("")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO) {
    System.out.println(memberDTO);

    //회원가입
    memberService.join(memberDTO);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .build();
  }

  //로그인
  //session 객체는 controller 메서드의 매개변수에 선언
  @PostMapping("/login")
  public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session) {
    //로그인 하기 전 session 데이터 조회
    Enumeration<String> names = session.getAttributeNames();
    System.out.println("로그인 전 세션에 저장된 데이터");
    while (names.hasMoreElements()) {
      String name = names.nextElement();
      Object value = session.getAttribute(name);
      System.out.println("key : " + name + " / value : " + value);
    }

    //로그인 처리
    MemberDTO result = memberService.login(memberDTO);

    //로그인 확인
    //System.out.println(result == null ? "불가능" : "가능");

    //실제 로그인(로그인이 가능한 회원이면 로그인의 정보를 세션에 저장)
    if (result != null) {
      session.setAttribute("loginInfo", result);
    }

    //로그인 후 세션 데이터 조회
    Enumeration<String> keys = session.getAttributeNames();
    System.out.println("로그인 후 세션에 저장된 데이터");
    while (keys.hasMoreElements()) {
      String name = keys.nextElement();
      Object value = session.getAttribute(name);
      System.out.println("key : " + name + " / value : " + value);
    }

    //게시글 목록 페이지
    return "redirect:/board";
  }

  //로그아웃
  @GetMapping("/logout")
  public String logout(HttpSession session) {
    session.removeAttribute("loginInfo");
    return "redirect:/board";
  }
}
