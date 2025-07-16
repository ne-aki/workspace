package com.green.rest_test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
  //모든 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos")
  public String getRestOrderInfoList() {
    return "모든 주문정보 조회 완료";
  }
  //하나의 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos/{itemNum}")
  public String getRestOrderInfo(@PathVariable("itemNum") int a) {
    System.out.println(a);
    return "하나의 주문정보 조회 완료";
  }
}

