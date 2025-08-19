package com.green.backend_shop.book.service;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.mapper.BookMapper;
import org.springframework.stereotype.Service;

@Service
public class BookService {
  private BookMapper bookMapper;

  public BookService(BookMapper bookMapper) {
    this.bookMapper = bookMapper;
  }

  public int regBook(BookDTO bookDTO) {
    return bookMapper.regBook(bookDTO);
  }
}
