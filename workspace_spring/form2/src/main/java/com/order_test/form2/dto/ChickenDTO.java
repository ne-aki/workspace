package com.order_test.form2.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//DTO(Data Transfer Object) : 데이터를 이동시키는 객체 - 데이터를 전송할 때 사용하는 객체
@Getter
@Setter
@ToString
public class ChickenDTO {
  private String menu;
  private int cnt;
  private String addr;
  private String addrDetail;
  private String request;

  public ChickenDTO() {}

  public ChickenDTO(String menu, int cnt, String addr, String addrDetail, String request) {
    this.menu = menu;
    this.cnt = cnt;
    this.addr = addr;
    this.addrDetail = addrDetail;
    this.request = request;
  }
}
