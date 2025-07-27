package com.example.home.db_connect_test.controller;

import com.example.home.db_connect_test.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
  @Autowired
  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }
  private BoardService boardService;
  @PostMapping("/boards")
  public void writeBoard() {
    boardService.postBoard();
  }
}
