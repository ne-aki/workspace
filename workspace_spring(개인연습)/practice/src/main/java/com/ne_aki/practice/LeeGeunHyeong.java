package com.ne_aki.practice;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class LeeGeunHyeong {
  private String name;
  private int age;
  private String hobby;

  public LeeGeunHyeong(String name, int age, String hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
