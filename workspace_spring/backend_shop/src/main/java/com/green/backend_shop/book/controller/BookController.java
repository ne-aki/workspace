package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
public class BookController {
  private final BookService bookService;

  //도서등록 api
  @PostMapping("")
  public int regBook(@RequestBody BookDTO bookDTO) {
    //중괄호에 변수가 들어옴
    //전달 받은 데이터가 a, b 두개면 log.info("내용 {} {}", a, b)
    log.info("전달받은 데이터{}", bookDTO);
    //log.info(bookDTO.toString());
    return bookService.regBook(bookDTO);
  }

  @GetMapping("")
  public List<BookDTO> getBookList() {
    return bookService.getBookList();
  }

  @GetMapping("/{bookNum}")
  public BookDTO getBookDetail(@PathVariable("bookNum") int bookNum) {
    return bookService.getBookDetail(bookNum);
  }
}
