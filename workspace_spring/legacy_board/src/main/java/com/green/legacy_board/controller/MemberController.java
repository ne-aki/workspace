package com.green.legacy_board.controller;

import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
  private final MemberService memberService;

  //회원가입 페이지로 이동
  @GetMapping("/join")
  public String goJoin() {
    return "join";
  }

  //로그인 페이지로 이동
  @GetMapping("/login")
  public String goLogin() {
    return "login";
  }

  //회원가입 실행
  //form 태그 안의 input 태그 데이터를 @ModelAttribute 어노테이션을 사용
  @PostMapping("/join")
  public String join(@ModelAttribute MemberDTO memberDTO) {
    System.out.println(memberDTO);
    //회원가입 후 게시글 목록 페이지로 이동
    memberService.join(memberDTO);

    //회원가입 후 바로 board-list.html 파일로 이동하면 게시글 목록 조회 안 됨
    // -> 게시글 목록 조회 기능을 수행하는 controller 메서드를 실행
    // return 안의 내용은 기본적으로 html 파일명으로 인식
    // -> redirect: 키워드를 붙이면 html 파일명으로 해석하지 않음
    return "redirect:/board";
  }

  //로그인 확인
  @PostMapping("/login")
  public String login(@ModelAttribute MemberDTO memberDTO) {
    //로그인 처리
    MemberDTO memberDTO1 = memberService.login(memberDTO);

    System.out.println(memberDTO1 == null ? "불가능" : "가능");

    //실제 로그인

    //게시글 목록 페이지
    return "redirect:/board";
  }
}
