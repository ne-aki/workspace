package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.dto.BookImgDTO;
import com.green.backend_shop.book.service.BookService;
import com.green.backend_shop.util.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
  private final BookService bookService;

  //도서 등록 api
  //첨부파일 데이터를 받을 때는 MultipartFile 자료형으로 받아야 한다.
  //첫번째 매개변수는 'mainImg'라는 이름으로 전달되는 파일 데이터를 받는다.
  //두번째 매개변수는 'subImgs'라는 이름으로 전달되면 배열 데이터 여러개를 배열로 받는다.
  //세번째 매개변수는 파일 데이터가 아니라, 입력한 도서 정보를 받는다
  //formData로 전달되는 데이터를 받을 때는 전달되는 데이터의 key와 동일한 이름을 맴버변수로 갖는
  //DTO 클래스로 받을 수 있다. 단, 이때는 DTO 클래스 앞에 @RequestBody 어노테이션은 사용하지 않는다

  //@RequestParam 어노테이션의 사용법
  // ex1 > @RequestParam("img") : "img"라는 이름으로 전달되는 데이터를 받겠다. 데이터 안넘어오는 오류남!
  // ex2 > @RequestParam(name="img") : "img"라는 이름으로 전달되는 데이터를 받겠다. 데이터 안넘어오는 오류남!
  // ex3 > @RequestParam(name="img", required=false) : "img"라는 이름으로 전달되는 데이터를 받겠다. 데이터 넘어오지 않아도 오류 안남!
  @PostMapping("")
  public void regBook(@RequestParam("mainImg") MultipartFile mainImg,
                      @RequestParam(name="subImgs", required=false) MultipartFile[] subImgs,
                      BookDTO bookDTO){
    //1. 이미지 파일을 업로드한다(server pc에 파일을 저장한다)
    BookImgDTO imgDTO = FileUploadUtil.fileUpload(mainImg); //단일 파일 업로드
    List<BookImgDTO> imgList = FileUploadUtil.multipleFileUpload(subImgs);
    imgList.add(imgDTO);

    //2. 도서 정보 등록
    // 이 메서드에서는 BOOK, BOOK_IMG 두 테이블에 데이터를 INSERT 한다.
    bookService.insertBook(bookDTO, imgList);

  }

  //도서 목록 조회 api
  @GetMapping("")
  public List<BookDTO> getBookList(){
    return bookService.getBookList();
  }

  //도서 상세 조회 api
  @GetMapping("/{bookNum}")
  public BookDTO getBookDetail(@PathVariable("bookNum") int bookNum){
    return bookService.getBookDetail(bookNum);
  }

}
