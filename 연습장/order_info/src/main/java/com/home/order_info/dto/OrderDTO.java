package com.home.order_info.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDTO {
  private int itemNum; //상품번호
  private String itemName; //상품명
  private int price; //가격
  private int cnt; //수량
  private String id; //주문자 ID
  private int total;

  public OrderDTO() {}

  public OrderDTO(int itemNum, String itemName, int price, int cnt, String id, int total) {
    this.itemNum = itemNum;
    this.itemName = itemName;
    this.price = price;
    this.cnt = cnt;
    this.id = id;
    this.total = total;
  }
}
