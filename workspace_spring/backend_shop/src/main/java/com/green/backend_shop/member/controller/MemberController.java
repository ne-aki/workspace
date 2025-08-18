package com.green.backend_shop.member.controller;

import com.green.backend_shop.member.dto.MemberDTO;
import com.green.backend_shop.member.mapper.MemberMapper;
import com.green.backend_shop.member.service.MemberService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
public class MemberController {
  private MemberService memberService;

  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  //회원가입 api
  @PostMapping("")
  public int regMember(@RequestBody MemberDTO memberDTO) {
    System.out.println(memberDTO);
    return memberService.join(memberDTO);
  }

  //id 사용 가능 여부 판단 api
  @GetMapping("/checkId/{memId}")
  public boolean checkId(@PathVariable("memId") String memId) {
    //사용가능 : return true;
    return memberService.isUsableId(memId);
  }
}
