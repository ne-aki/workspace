package com.green.backend_shop.book.service;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
  private final BookMapper bookMapper;

  public int regBook(BookDTO bookDTO) {
    return bookMapper.regBook(bookDTO);
  }

  public List<BookDTO> getBookList() {
    return bookMapper.getBookList();
  }

  public BookDTO getBookDetail(int bookNum) {
    return bookMapper.getBookDetail(bookNum);
  }
}
