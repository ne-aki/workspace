package com.green.basic_board2.mapper;

import com.green.basic_board2.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
  //회원가입 쿼리 실행 추상메서드
  int regMember(MemberDTO memberDTO);
  String getMemberName();
  //조회된 데이터 중 모든 데이터를 가져오는 자료형을 리턴타입에 넣음
  List<String> getMemberNameAll();
  int getMemberAge();
  MemberDTO getMember();
  List<MemberDTO> getMemberAll();
  List<MemberDTO> getMemberAll2(int memAge);
}
