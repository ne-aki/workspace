package com.green.db_board.controller;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.service.BoardService;
import lombok.extern.log4j.Log4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
@Log4j
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
    System.out.println(boardDTO);
    boardService.regBoard(boardDTO);
  }

  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum) {
    return boardService.getBoard(boardNum);
  }

  @DeleteMapping("/{boardNum}")
  public int deleteBoard(@PathVariable("boardNum") int boardNum) {
    return boardService.deleteBoard(boardNum);
  }

  @PutMapping("/{boardNum}")
  public int updateBoard(
          @PathVariable("boardNum") int boardNum,
          @RequestBody BoardDTO boardDTO
  ) {
    boardDTO.setBoardNum(boardNum);
    return boardService.updateBoard(boardDTO);
  }
}
