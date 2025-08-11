package com.green.restApi_test;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDTO {
  private int bookNum;
  private String title;
  private String author;
  private String introBook;
  private int price;

  public BookDTO() {}

  public BookDTO(int bookNum, String title, String author, String inroBook, int price) {
    this.bookNum = bookNum;
    this.title = title;
    this.author = author;
    this.introBook = inroBook;
    this.price = price;
  }

  @Override
  public String toString() {
    return "BookDTO{" +
            "bookNum=" + bookNum +
            ", title='" + title + '\'' +
            ", author='" + author + '\'' +
            ", inroBook='" + introBook + '\'' +
            ", price=" + price +
            '}';
  }
}
