package com.order_test.form2.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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
