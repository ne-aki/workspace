package com.green.legacy_board.controller;

import com.green.legacy_board.dto.BoardDTO;
import com.green.legacy_board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
  private final BoardService boardService;

  @GetMapping("")
  public String getBoardList(Model model) {
    //게시글 목록 조회
    List<BoardDTO> boardList = boardService.getBoardList();

    //목록 데이터를 html로 가져가기
    model.addAttribute("boardList", boardList);

    //보여질 html 파일을 작성
    return "board-list";
  }

  @GetMapping("/detail")
  public String getBoardDetail() {
    //보여질 html 파일명을 리턴
    return "board-detail";
  }

  //게시글 작성 페이지로 이동
  @GetMapping("/writeForm")
  public String goWriteForm() {
    return "write-form";
  }

  //게시글 등록
  @PostMapping("/write")
  public String write(@ModelAttribute BoardDTO boardDTO) {
    //게시글 등록 쿼리 실행
    boardService.write(boardDTO);

    //게시글 목록 페이지로 이동
    return "redirect:/board";
  }
}
