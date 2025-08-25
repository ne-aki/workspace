package com.green.backend_shop.cart.controller;

import com.green.backend_shop.cart.dto.CartDTO;
import com.green.backend_shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("carts")
@RequiredArgsConstructor
public class CartConroller {
  private final CartService cartService;

  @PostMapping("")
  public void insertCart(@RequestBody CartDTO cartDTO) {
    log.info(cartDTO.toString());
    cartService.addCart(cartDTO);
  }

  //장바구니 목록 조회 api
  @GetMapping("/{memId}")
  public List<CartDTO> getCartList(@PathVariable("memId") String memId) {
    return cartService.getCartList(memId);
  }

  //장바구니 목록 하나 삭제 api
  @DeleteMapping("/{cartNum}")
  public int deleteCart(@PathVariable("cartNum") int cartNum) {
    return cartService.deleteCart(cartNum);
  }
}
