package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("buys")
@RequiredArgsConstructor
public class BuyController {
  private final BuyService buyService;

  @PostMapping("")
  public int buyBook(@RequestBody BuyDTO buyDTO) {
    log.info(buyDTO.toString());
    return buyService.buyBook(buyDTO);
  }

  //장바구니 페이지 - 구매하기 api
  @PostMapping("/all")
  public void buyAll(@RequestBody BuyDTO buyDTO) {
    log.info(buyDTO.toString());
    buyService.buyAll(buyDTO);
  }
}
