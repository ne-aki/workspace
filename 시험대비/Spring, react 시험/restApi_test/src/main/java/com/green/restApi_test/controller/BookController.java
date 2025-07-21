package com.green.restApi_test.controller;

import com.green.restApi_test.BookDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {
  //1. 모든 도서정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/books")
  public List<BookDTO> getBooks() {
    List<BookDTO> bookList = new ArrayList<>();
    bookList.add(new BookDTO(1, "자바 기초", "김개발", "자바에 대한 기초를 배울 수 있습니다.", 20000));
    bookList.add(new BookDTO(2, "웹 페이지 제작하기", "윤개발", "웹 페이지를 만들고 디자인하는 것을 배웁니다.", 15000));
    bookList.add(new BookDTO(3, "리액트 따라하기", "박개발", "리액트를 쉽게 따라할 수 있습니다.", 30000));
    bookList.add(new BookDTO(4, "동남아 여행", "김여행", "동남아 관광을 더욱 재미있게 즐길 수 있습니다.", 15000));
    bookList.add(new BookDTO(5, "한식 레시피", "이요리", "요리가 서툴러도 쉽게 한식을 요리할 수 있습니다.", 20000));
    return bookList;
  }
  //2. 하나의 도서정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/books/{bookNum}")
  public String getBook(@PathVariable("bookNum") int bookNum) {
    System.out.println("하나의 도서정보 조회");
    System.out.println("bookNum = " + bookNum);
    return "하나의 도서정보 조회 완료";
  }
  //3. 하나의 도서정보를 등록하는 기능을 제공하는 REST API(도서 등록 시 도서명, 저자, 도서내용, 가격 정보가 필요)
  @PostMapping("/books")
  public String regBook(@RequestBody BookDTO bookDTO) {
    System.out.println("하나의 도서정보 등록");
    System.out.println(bookDTO);
    return "하나의 도서정보 등록 완료";
  }
  //4. 하나의 도서정보를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("books/{bookNum}")
  public String deleteBook(@PathVariable ("bookNum") int bookNum) {
    System.out.println("하나의 도서정보 삭제");
    System.out.println("bookNum = " + bookNum);
    return "하나의 도서정보 삭제 완료";
  }
  //5. 하나의 도서정보에서 도서명과 저자, 도서가격을 수정하는 기능을 제공하는 REST API
  @PutMapping("/books/{bookNum}")
  public String updateBook(@PathVariable("bookNum") int itemNum, @RequestBody BookDTO bookDTO) {
    System.out.println("하나의 도서정보에서 도서명과 저자, 도서가격 수정");
    System.out.println("itemNum = " + itemNum);
    System.out.println(bookDTO);
    return "하나의 도서정보에서 도서명과 저자, 도서가격 수정 완료";
  }
}
