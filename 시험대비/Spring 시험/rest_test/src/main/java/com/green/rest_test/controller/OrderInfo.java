package com.green.rest_test.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderInfo {
  private int itemNum;
  private String itemName;
  private int price;
  private int cnt;
  private String Id;
  private int purchaseAmount;

  public OrderInfo() {}

  public OrderInfo(int itemNum, String itemName, int price, int cnt, String id, int purchaseAmount) {
    this.itemNum = itemNum;
    this.itemName = itemName;
    this.price = price;
    this.cnt = cnt;
    Id = id;
    this.purchaseAmount = purchaseAmount;
  }
}
