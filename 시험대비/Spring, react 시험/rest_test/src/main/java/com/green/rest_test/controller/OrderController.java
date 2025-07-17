package com.green.rest_test.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

  //1. 모든 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos")
  public List<OrderDTO> getRestOrderInfoList() {
    OrderDTO dto1 = new OrderDTO(101,"데님 청바지", 15000, 2, "abc");
    OrderDTO dto2 = new OrderDTO(102, "맨투맨 반팔 티셔츠", 10000, 3, "def");
    OrderDTO dto3 = new OrderDTO(103, "오버핏 니트", 25000, 2, "ghi");
    OrderDTO dto4 = new OrderDTO(104, "롱 패딩", 55000, 1, "jkl");
    OrderDTO dto5 = new OrderDTO(105, "맨투맨 긴팔 티셔츠", 12000, 3, "mno");
    List<OrderDTO> dtoList = new ArrayList<>();
    dtoList.add(dto1);
    dtoList.add(dto2);
    dtoList.add(dto3);
    dtoList.add(dto4);
    dtoList.add(dto5);
    return dtoList;
  }
  //2. 하나의 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos/{itemNum}")
  public String getRestOrderInfo(@PathVariable("itemNum") int a) {
    System.out.println(a);
    return "하나의 주문정보 조회 완료";
  }
  //3. 하나의 주문정보를 등록하는 기능을 제공하는 REST API
  @PostMapping("/rest-order-infos")
  public String insertRestOrderInfo(@RequestBody OrderDTO orderDTO) {
    System.out.println(orderDTO.toString());
    return "하나의 주문정보 등록 완료";
  }
  //4. 하나의 주문정보를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("/rest-order-infos/{itemNum}")
  public String deleteRestOrderInfo(@PathVariable("itemNum") int a) {
    System.out.println(a);
    return "하나의 주문정보 삭제 완료";
  }
  //5. 하나의 주문정보에서 상품명과 상품가격을 수정하는 기능을 제공하는 REST API
  @PutMapping("rest-order-infos/{itemNum}")
  public String updateRestOrderInfo(@RequestBody OrderDTO orderDTO, @PathVariable("itemNum") int a) {
    System.out.println(a);
    System.out.println(orderDTO.toString());
    return "상품명, 상품가격 수정 완료";
  }
}

