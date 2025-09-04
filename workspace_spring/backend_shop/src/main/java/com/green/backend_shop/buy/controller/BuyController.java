package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

  //관리자 구매이력조회 페이지의 구매목록조회 api
  @GetMapping("/buy-list-admin")
  public List<BuyDTOForAdmin> getBuyListForAdmin() {
    return buyService.getBuyListForAdmin();
  }

  //관리자 구매 상세목록 조회 api
  @GetMapping("/{orderNum}")
  public List<BuyDTO> getBuyDetail(@PathVariable("orderNum") int orderNum) {
    return buyService.getBuyDetail(orderNum);
  }
}
