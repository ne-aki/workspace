package com.home.login_practice.service;

import com.home.login_practice.dto.MemberDTO;
import com.home.login_practice.mapper.MemberMapper;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;
  public  MemberService(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
  }
  public int regMember(MemberDTO memberDTO) {
    return memberMapper.regMember(memberDTO);
  }
}
