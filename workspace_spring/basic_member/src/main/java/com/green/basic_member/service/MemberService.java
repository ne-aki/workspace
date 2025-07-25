package com.green.basic_member.service;

import com.green.basic_member.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  @Autowired
  public MemberService(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
  }

  //멤버를 등록하는 기능
  public void regMember() {
    memberMapper.regMember();
  }
  //멤버정보를 수정하는 기능
  public void setMember() {
    memberMapper.setMember();
  }
  //멤버정보를 삭제하는 기능
  public void removeMember() {
    memberMapper.removeMember();
  }
}
