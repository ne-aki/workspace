package com.home.login_practice.mapper;

import com.home.login_practice.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  int regMember(MemberDTO memberDTO);
}
