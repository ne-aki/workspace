package com.home.practice_spring.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class PracticeDTO {
  private int memNum;
  private String id;
  private String pw;
  private String memName;
  private int memAge;
  private String memTel;
  private LocalDate birthday;
  private LocalDateTime joinDate;
  private String country;
  private String gender;
}
