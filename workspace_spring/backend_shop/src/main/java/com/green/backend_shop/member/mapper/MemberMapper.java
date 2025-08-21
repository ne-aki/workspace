package com.green.backend_shop.member.mapper;

import com.green.backend_shop.member.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  int join(MemberDTO memberDTO);
  String checkMemId(String memId);
  MemberDTO login(MemberDTO memberDTO);
}
