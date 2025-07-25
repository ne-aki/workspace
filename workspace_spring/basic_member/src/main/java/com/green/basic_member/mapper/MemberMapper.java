package com.green.basic_member.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  //멤버들 등록하는 추상메서드
  public void regMember();
  //멤버 정보를 수정하는 추상메서드
  public void setMember();
  //멤버 정보를 삭제하는 추상메서드
  void removeMember();
}
