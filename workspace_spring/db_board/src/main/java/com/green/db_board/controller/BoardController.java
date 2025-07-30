package com.green.db_board.controller;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.service.BoardService;
import org.springframework.web.bind.annotation.*;

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

  @PostMapping("")
  public void regBoard(@RequestBody BoardDTO boardDTO) {
    boardService.regBoard(boardDTO);
  }

  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum) {
    return boardService.getBoard(boardNum);
  }
}
