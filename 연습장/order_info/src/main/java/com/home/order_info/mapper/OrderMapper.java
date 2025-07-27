package com.home.order_info.mapper;

import com.home.order_info.dto.OrderDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
  //모든 주문정보 조회
  List<OrderDTO> getOrderList();
  //하나의 주문정보 조회
  OrderDTO getOrder(int itemNum);
  //주문정보 등록
  int regOrder(OrderDTO orderDTO);
  //주문정보 삭제
  int deleteOrder(int itemNum);
}
