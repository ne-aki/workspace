package com.green.backend_student.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StuDTO {
  private int classNum;
  private String className;

  private int stuNum;
  private String stuName;
  private int stuAge;
}
