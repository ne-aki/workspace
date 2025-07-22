package com.green.restful.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {
  private String name;
  private int korScore;
  private int engScore;

  //기본생성자도 무조건 만들어야함(실행이 안됨)
  public Student() {}

  public Student(String name, int korScore, int engScore) {
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
  }
}
