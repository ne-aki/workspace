package com.green.backend_shop.book.mapper;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.dto.BookImgDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  int regBook(BookDTO bookDTO);
  List<BookDTO> getBookList();
  BookDTO getBookDetail(int bookNum);
  void insertImgs(List<BookImgDTO> bookImgList);
  //book 테이블에 등록할 book_num 조회
  int getNextBookNum();
}
