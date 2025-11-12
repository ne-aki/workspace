package com.green.jwt_board.controller;

import com.green.jwt_board.dto.BoardDTO;
import com.green.jwt_board.dto.MemberDTO;
import com.green.jwt_board.service.BoardService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
  private final BoardService boardService;
  private final PasswordEncoder passwordEncoder;

  //비밀번호 암호화 예제 api
  @GetMapping("/pw-test")
  public String test1() {
    String pw = "1234";

    //암호화 메서드
    String encodedPw1 = passwordEncoder.encode(pw);
    String encodedPw2 = passwordEncoder.encode(pw);
    System.out.println(encodedPw1);
    System.out.println(encodedPw2);

    //암호전 데이터와 암호화된 데이터를 비교
    boolean result = passwordEncoder.matches(pw, encodedPw1);
    System.out.println(result);

    return "aaa";
  }

  @GetMapping("")
  public ResponseEntity<?> getBoardList() {
    //게시글 목록 조회
    List<BoardDTO> boardList = boardService.getBoardList();

    //게시글 정보 리턴
    return ResponseEntity
            .status(HttpStatus.OK)
            .body(boardList);
  }

  //게시글 등록
  @PostMapping("")
  public ResponseEntity<?> write(@RequestBody BoardDTO boardDTO) {
    //게시글 등록 쿼리 실행. 현재 로그인 id 정보 없음!
    boardDTO.setWriter("臨時");
    boardService.write(boardDTO);

    //게시글 목록 페이지로 이동
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .build();
  }

  //게시글 상세 페이지
  @GetMapping("/{boardNum}")
  public ResponseEntity<?> detail(@PathVariable("boardNum") int boardNum) {
    System.out.println("전달받은 글 번호 : " + boardNum);

    BoardDTO board = boardService.getDetail(boardNum);

    //게시글 상세페이지(board-detail.html)
    return ResponseEntity
            .status(HttpStatus.OK)
            .body(board);
  }

  //게시글 삭제
  @DeleteMapping("/{boardNum}")
  public ResponseEntity<?> deleteBoard(@PathVariable("boardNum") int boardNum) {
    boardService.deleteBoard(boardNum);

    //게시글 목록 페이지
    return ResponseEntity
            .status(HttpStatus.OK)
            .build();
  }

  // 글수정
  @PutMapping("/{boardNum}")
  public ResponseEntity<?> updateBoard(
          @PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO
  ) {
    System.out.println(boardDTO);

    boardDTO.setBoardNum(boardNum);

    //글 수정 쿼리 실행
    boardService.updateBoard(boardDTO);

    //상세페이지로 이동
    return ResponseEntity
            .status(HttpStatus.OK)
            .build();
  }
}
