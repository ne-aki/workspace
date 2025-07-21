package com.green.rest_test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StudentDTO {
  private String name;
  private int korScore;
  private int engScore;
  private String address;
}
