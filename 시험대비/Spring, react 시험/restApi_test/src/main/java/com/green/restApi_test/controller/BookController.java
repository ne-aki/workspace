package com.green.restApi_test.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class BookController {
  //1. 모든 도서정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/books")
  public String getBooks() {
    System.out.println("모든 도서정보 조회");
    return "모든 도서정보 조회 완료";
  }
  //2. 하나의 도서정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/books/{bookNum}")
  public String getBook(@PathVariable("/bookNum") int bookNum) {
    System.out.println("하나의 도서정보 조회");
    System.out.println(bookNum);
    return "하나의 도서정보 조회 완료";
  }
  //3. 하나의 도서정보를 등록하는 기능을 제공하는 REST API(도서 등록 시 도서명, 저자, 도서내용, 가격 정보가 필요)
  //4. 하나의 도서정보를 삭제하는 기능을 제공하는 REST API
  //1. 하나의 도서정보에서 도서명과 저자, 도서가격을 수정하는 기능을 제공하는 REST API
}
