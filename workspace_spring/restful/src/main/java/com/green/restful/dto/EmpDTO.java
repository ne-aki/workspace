package com.green.restful.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmpDTO {
  //한 글자가 camel case인 경우 인식되지 않는 경우가 있음
  private String ename;
  private String job;
  private int sal;

  @Override
  public String toString() {
    return "EmpDTO{" +
            "eName='" + ename + '\'' +
            ", job='" + job + '\'' +
            ", sal=" + sal +
            '}';
  }
}
