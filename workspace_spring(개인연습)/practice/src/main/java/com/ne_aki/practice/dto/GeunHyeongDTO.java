package com.ne_aki.practice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeunHyeongDTO {
  private String name;
  private int age;

  public GeunHyeongDTO() {}

  public GeunHyeongDTO(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
