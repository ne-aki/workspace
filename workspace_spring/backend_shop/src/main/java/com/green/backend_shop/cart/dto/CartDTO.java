package com.green.backend_shop.cart.dto;

import com.green.backend_shop.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class CartDTO {
  private int cartNum;
  private int bookNum;
  private int cartCnt;
  private String memId;
  private int totalPrice;
  private LocalDateTime cartDate;
  private BookDTO bookDTO;
}
