package com.green.backend_shop.book.mapper;

import com.green.backend_shop.book.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  int regBook(BookDTO bookDTO);
  List<BookDTO> getBookList();
  BookDTO getBookDetail(int bookNum);
}
