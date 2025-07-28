package com.home.order_info.controller;

import com.home.order_info.dto.OrderDTO;
import com.home.order_info.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {
  //생성자
  private OrderService orderService;

  @Autowired
  public OrderController(OrderService orderService) {
    this.orderService = orderService;
  }

  //1. 모든 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos")
  public List<OrderDTO> getRestOrderInfoList() {
    return orderService.getOrderList();
  }
  //2. 하나의 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/rest-order-infos/{itemNum}")
  public OrderDTO getRestOrderInfo(@PathVariable("itemNum") int itemNum) {
    System.out.println("하나의 주문정보 조회");
    OrderDTO order = orderService.getOrder(itemNum);
    System.out.println(itemNum);
    return order;
  }
  //3. 하나의 주문정보를 등록하는 기능을 제공하는 REST API
  @PostMapping("/rest-order-infos")
  public int insertRestOrderInfo(@RequestBody OrderDTO orderDTO) {
    System.out.println("하나의 주문정보 등록");
    List<OrderDTO> orderList = orderService.getOrderList();
    int register = orderService.regOrder(orderDTO);
//    dtoList.add(orderDTO);
//    System.out.println(dtoList);
//    System.out.println(orderDTO);
    return register;
  }
  //4. 하나의 주문정보를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("/rest-order-infos/{itemNum}")
  public int deleteRestOrderInfo(@PathVariable("itemNum") int itemNum) {
    System.out.println("하나의 주문정보 삭제");
//    List<OrderDTO> dtoList = getRestOrderInfoList();
//    System.out.println(itemNum);
    int delete = orderService.deleteOrder(itemNum);
    return delete;
  }
  //5. 하나의 주문정보에서 상품명과 상품가격과 개수를 수정하는 기능을 제공하는 REST API
  @PutMapping("rest-order-infos/{itemNum}")
  public int updateRestOrderInfo(@PathVariable("itemNum") int itemNum, @RequestBody OrderDTO orderDTO) {
    System.out.println("하나의 주문정보에서 상품명, 상품가격 수정");
    int update = orderService.updateOrder(orderDTO);
    orderDTO.setItemNum(itemNum);
    System.out.println(itemNum);
    System.out.println(orderDTO);
    return update;
  }
}
