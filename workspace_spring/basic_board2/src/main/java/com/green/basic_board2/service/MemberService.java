package com.green.basic_board2.service;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.mapper.MemberMapper;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;
  public MemberService(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
  }

  //회원가입 기능
  public int regMember(MemberDTO memberDTO) {
    System.out.println("회원가입");
    int result = memberMapper.regMember(memberDTO);
    return result;
  }
}
