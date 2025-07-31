package com.home.login_practice.controller;

import com.home.login_practice.dto.MemberDTO;
import com.home.login_practice.service.MemberService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("members")
public class MemberController {
  private MemberService memberService;
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }
  @PostMapping("")
  public int regMember(@RequestBody MemberDTO memberDTO) {
    return memberService.regMember(memberDTO);
  }
}
