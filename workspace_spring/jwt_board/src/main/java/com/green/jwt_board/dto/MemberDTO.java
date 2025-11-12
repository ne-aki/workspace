package com.green.jwt_board.dto;

import lombok.Data;

@Data
public class MemberDTO {
  private String memEmail;
  private String memPw;
  private String memName;
  private String memRole;
}
