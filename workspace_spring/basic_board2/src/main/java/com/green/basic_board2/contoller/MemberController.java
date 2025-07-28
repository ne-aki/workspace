package com.green.basic_board2.contoller;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.service.MemberService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
  private MemberService memberService;
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }
  @PostMapping("/members")
  public int regMember(@RequestBody MemberDTO memberDTO) {
    int result = memberService.regMember(memberDTO);
    return result;
  }
}
