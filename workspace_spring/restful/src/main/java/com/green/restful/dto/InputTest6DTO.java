package com.green.restful.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InputTest6DTO {
  private String id;
  private String pw;
  private String mail;
  private String name;
  private String resRegNum;
  private String birthday;
  private String address;
  private String introducing;

  public InputTest6DTO() {}

  public InputTest6DTO(
          String id, String pw, String mail, String name, String resRegNum, String birthday, String address, String introducing
  ) {
    this.id = id;
    this.pw = pw;
    this.mail = mail;
    this.name = name;
    this.resRegNum = resRegNum;
    this.birthday = birthday;
    this.address = address;
    this.introducing = introducing;
  }
}
