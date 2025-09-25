package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.dto.SearchBuyDTO;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("buys")

@RequiredArgsConstructor
public class BuyController {
  private final BuyService buyService;

  //도서 상세 페이지 - 구매하기
  @PostMapping("")
  public ResponseEntity<?> buyBook(@RequestBody BuyDTO buyDTO) {
    try {
      //실행코드
      buyService.buyBook(buyDTO);
      return ResponseEntity
              .status(HttpStatus.CREATED)
              .build();
    } catch (Exception e) {
      //오류가 발생하면 실행할 코드
      e.printStackTrace();
      return ResponseEntity
              .status(HttpStatus.INTERNAL_SERVER_ERROR)
              .body("구매하기 쿼리 실행 중 오류가 발생했습니다.");
    }
  }

  //장바구니 페이지 - 구매하기 api
  @PostMapping("/all")
  public void buyAll(@RequestBody BuyDTO buyDTO) {
    log.info(buyDTO.toString());
    buyService.buyAll(buyDTO);
  }

  //관리자 구매이력조회 페이지의 구매목록조회 api
  @GetMapping("/buy-list-admin")
  public ResponseEntity<?> getBuyListForAdmin(SearchBuyDTO searchBuyDTO) {
    log.info(searchBuyDTO.toString());

    try {
      //구매 목록
      List<BuyDTOForAdmin> list = buyService.getBuyListForAdmin(searchBuyDTO);

      return ResponseEntity
              .status(HttpStatus.OK)
              .body(list);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity
              .status(HttpStatus.INTERNAL_SERVER_ERROR)
              .build();
    }

  }

  //관리자 구매 상세목록 조회 api
  @GetMapping("/{orderNum}")
  public List<BuyDTO> getBuyDetail(@PathVariable("orderNum") int orderNum) {
    return buyService.getBuyDetail(orderNum);
  }

  //최근 10일간 매출액 조회
  @GetMapping("/sales")
  public List<Integer> getSales() {
    return buyService.getSales();
  }
}
