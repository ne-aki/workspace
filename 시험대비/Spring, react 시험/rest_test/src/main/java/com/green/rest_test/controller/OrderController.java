package com.green.rest_test.controller;

import com.green.rest_test.dto.OrderDTO;
import com.green.rest_test.dto.StudentDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

  //1. 모든 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos")
  public List<OrderDTO> getRestOrderInfoList() {
    System.out.println("모든 주문정보 조회");
    List<OrderDTO> dtoList = new ArrayList<>();
    dtoList.add(new OrderDTO(101,"데님 청바지", 15000, 2, "abc"));
    dtoList.add(new OrderDTO(102, "맨투맨 반팔 티셔츠", 10000, 3, "def"));
    dtoList.add(new OrderDTO(103, "오버핏 니트", 25000, 2, "ghi"));
    dtoList.add(new OrderDTO(104, "롱 패딩", 55000, 1, "jkl"));
    dtoList.add(new OrderDTO(105, "맨투맨 긴팔 티셔츠", 12000, 3, "mno"));
    return dtoList;
  }
  //2. 하나의 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos/{itemNum}")
  public String getRestOrderInfo(@PathVariable("itemNum") int itemNum) {
    System.out.println("하나의 주문정보 조회");
    System.out.println(itemNum);
    return "하나의 주문정보 조회 완료";
  }
  //3. 하나의 주문정보를 등록하는 기능을 제공하는 REST API
  @PostMapping("/rest-order-infos")
  public String insertRestOrderInfo(@RequestBody OrderDTO orderDTO) {
    System.out.println("하나의 주문정보 등록");
    System.out.println(orderDTO.toString());
    return "하나의 주문정보 등록 완료";
  }
  //4. 하나의 주문정보를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("/rest-order-infos/{itemNum}")
  public String deleteRestOrderInfo(@PathVariable("itemNum") int itemNum) {
    System.out.println("하나의 주문정보 삭제");
    System.out.println(itemNum);
    return "하나의 주문정보 삭제 완료";
  }
  //5. 하나의 주문정보에서 상품명과 상품가격을 수정하는 기능을 제공하는 REST API
  @PutMapping("rest-order-infos/{itemNum}")
  public String updateRestOrderInfo(@PathVariable("itemNum") int itemNum, @RequestBody OrderDTO orderDTO) {
    System.out.println("하나의 주문정보에서 상품명, 상품가격 수정");
    System.out.println(itemNum);
    System.out.println(orderDTO.toString());
    return "하나의 주문정보에서 상품명, 상품가격 수정 완료";
  }

  @PostMapping("/students")
  public String regStudent(@RequestBody StudentDTO studentDTO) {
    System.out.println("학생 정보 등록");
    System.out.println(studentDTO);
    return "학생정보 등록 완료";
  }
}

