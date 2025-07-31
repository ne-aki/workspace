package com.home.login_practice.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDTO {
  private String id;
  private String pw;
  private String nickname;
  private String email;
  private LocalDate birthday;
  private int height;
  private int weight;
  private String gender;
  private String tel;
  private String nationality;
  private LocalDateTime joinDate;
}
