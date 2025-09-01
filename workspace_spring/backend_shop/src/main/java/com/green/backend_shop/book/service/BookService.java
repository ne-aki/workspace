package com.green.backend_shop.book.service;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.dto.BookImgDTO;
import com.green.backend_shop.book.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
  private final BookMapper bookMapper;

  //도서등록
  @Transactional(rollbackFor = Exception.class)
  public void regBook(BookDTO bookDTO, List<BookImgDTO> bookImgList) {
    //BOOK, BOOK_IMG 테이블의 INSERT를 위해 가져온 두 데이터 (bookDTO, bookImgList에는 현재 bookNum이 없는 상태이다.
    //그래서 쿼리 실행 전 bookDTO, bookImgList 두 변수에 bookNum 데이터를 추가해야 한다.

    //다음에 들어갈 bookNum 데이터를 조회
    int nextBookNum = bookMapper.getNextBookNum();
    bookDTO.setBookNum(nextBookNum);
    for (BookImgDTO dto : bookImgList) {
      dto.setBookNum(nextBookNum);
    }

    //BOOK 테이블에 도서 정보 INSERT
    bookMapper.regBook(bookDTO);

    //BOOK_IMG 테이블에 도서 이미지 정보도 INSERT
    bookMapper.insertImgs(bookImgList);
  }

  public List<BookDTO> getBookList() {
    return bookMapper.getBookList();
  }

  public BookDTO getBookDetail(int bookNum) {
    return bookMapper.getBookDetail(bookNum);
  }
}
