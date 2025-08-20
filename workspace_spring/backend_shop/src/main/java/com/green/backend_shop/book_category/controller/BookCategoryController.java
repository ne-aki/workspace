package com.green.backend_shop.book_category.controller;

import com.green.backend_shop.book_category.dto.BookCategoryDTO;
import com.green.backend_shop.book_category.service.BookCategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/book-categories")
public class BookCategoryController {
  private final BookCategoryService bookCategoryService;

  //카테고리 목록 조회 api
  @GetMapping("")
  public List<BookCategoryDTO> selectCateList() {
    System.out.println("카테고리 목록 조회 실행!");
    log.info("카테고리 목록 조회 실행");
    return bookCategoryService.getCateList();
  }
}
