package com.green.basic_member.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDTO {
  private String MemId;
  private String MemPw;
  private String MemName;
  private int memAge;
  private LocalDateTime birthday;
}
