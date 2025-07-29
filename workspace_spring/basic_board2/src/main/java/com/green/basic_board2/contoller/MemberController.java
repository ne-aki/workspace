package com.green.basic_board2.contoller;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.service.MemberService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MemberController {
  private MemberService memberService;
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }
  @PostMapping("/members")
  public void regMember(@RequestBody MemberDTO memberDTO) {
    //리턴타입이 int여도 상관없으나, 리턴값이 1로 고정되기 때문에 현재로써는 의미없음
    memberService.regMember(memberDTO);
  }
  @GetMapping("/test1")
  public String getMemberName() {
    return memberService.getMemberName();
  }
  @GetMapping("/test2")
  public List<String> getMemberNameAll() {
    return memberService.getMemberNameAll();
  }
  @GetMapping("/members")
  public List<MemberDTO> getMemberAll() {
    return memberService.getMemberAll();
  }
}
