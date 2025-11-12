package com.green.jwt_board.service;

import com.green.jwt_board.dto.MemberDTO;
import com.green.jwt_board.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;
  private final PasswordEncoder passwordEncoder;

  public void join(MemberDTO memberDTO) {
    //암호화
    String encodedPw = passwordEncoder.encode(memberDTO.getMemPw());
    memberDTO.setMemPw(encodedPw);

    memberMapper.join(memberDTO);
  }
  public MemberDTO login(MemberDTO memberDTO) {
    return memberMapper.login(memberDTO);
  }
}
