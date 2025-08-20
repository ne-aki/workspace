package com.green.backend_shop.book.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
public class BookDTO {
  private int bookNum;
  private String title;
  private String publisher;
  private int price;
  private LocalDateTime regDate;
  private String bookIntro;
  private int cateNum;
}
