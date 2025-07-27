package com.home.practice_spring.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PracticeMapper {
  //회원 등록 추상 메서드
  void regMember();

  void changeMember();
  void deleteMember();
}
