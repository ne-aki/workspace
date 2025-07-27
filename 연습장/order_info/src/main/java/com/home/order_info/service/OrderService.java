package com.home.order_info.service;

import com.home.order_info.dto.OrderDTO;
import com.home.order_info.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
  private OrderMapper orderMapper;
  @Autowired
  public OrderService(OrderMapper orderMapper) {
    this.orderMapper = orderMapper;
  }

  //모든 정보 조회 기능
  public List<OrderDTO> getOrderList() {
    System.out.println("주문 목록 조회 실행");
    List<OrderDTO> orderList = orderMapper.getOrderList();
    System.out.println("주문 목록 조회 완료");
    return orderList;
  }

  //하나의 주문 정보 조회 기능
  public OrderDTO getOrder(int itemNum) {
    System.out.println("하나의 주문 조회");
    OrderDTO order = orderMapper.getOrder(itemNum);
    System.out.println("조회 완료");
    return order;
  }

  //주문정보 등록 기능
  public int regOrder(OrderDTO orderDTO) {
    System.out.println("주문 등록");
    int register = orderMapper.regOrder(orderDTO);
    System.out.println("주문 완료");
    return register;
  }

  //주문정보 삭제 기능
  public int deleteOrder(int itemNum) {
    System.out.println("주문 삭제");
    int delete = orderMapper.deleteOrder(itemNum);
    System.out.println("삭제 완료");
    return delete;
  }
}
