package com.green.backend_shop.member.service;

import com.green.backend_shop.member.dto.MemberDTO;
import com.green.backend_shop.member.mapper.MemberMapper;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  public MemberService(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
  }

  public int regMember(MemberDTO memberDTO) {
    return memberMapper.regMember(memberDTO);
  }
}
