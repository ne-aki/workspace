package com.green.backend_shop.cart.mapper;

import com.green.backend_shop.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
  int insertCart(CartDTO cartDTO);

  //장바구니 목록 조회
  List<CartDTO> getCartList(String memId);
  //장바구니 목록 하나 삭제
  int deleteCart(int cartNum);
}
