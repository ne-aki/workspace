package com.green.basic_board2.mapper;

import com.green.basic_board2.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  //회원가입 쿼리 실행 추상메서드
  int regMember(MemberDTO memberDTO);
}
