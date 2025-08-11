package com.green.rest_test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//문제에는 5개만 만들라고 되어 있지만, db연결할 때 정석은 모든 컬럼명을 다 연결한다. 현재는 둘다 정답으로 함
public class OrderDTO {
  private int itemNum; //상품번호
  private String itemName; //상품명
  private int price; //가격
  private int cnt; //수량
  private String id; //주문자 ID

  public OrderDTO() {}

  public OrderDTO(int itemNum, String itemName, int price, int cnt, String id) {
    this.itemNum = itemNum;
    this.itemName = itemName;
    this.price = price;
    this.cnt = cnt;
    this.id = id;
  }
}

