package com.green.basic_member.controller;

import com.green.basic_member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
  private MemberService memberService;

  @Autowired
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  //멤버를 등록하는 api
  @PostMapping("/members")
  public void regMember() {
    memberService.regMember();
  }
  //멤버 정보를 수정하는 api
  @PutMapping("/members")
  public void setMember() {
    memberService.setMember();
  }
  //멤버 정보를 삭제하는 api
  @DeleteMapping("/members")
  public void removeMember() {
    memberService.removeMember();
  }
}
