package com.green.db_board.controller;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.service.BoardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {
  private BoardService boardService;
  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }

  @GetMapping("")
  public List<BoardDTO> getBoardList() {
    return boardService.getBoardList();
  }
}
