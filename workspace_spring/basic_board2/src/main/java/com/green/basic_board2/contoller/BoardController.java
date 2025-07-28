package com.green.basic_board2.contoller;

import com.green.basic_board2.dto.BoardDTO;
import com.green.basic_board2.mapper.BoardMapper;
import com.green.basic_board2.service.BoardService;
import org.springframework.web.bind.annotation.*;

@RestController
public class BoardController {
  private BoardService boardService;

  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }

  //게시글 등록 API
  @PostMapping("/boards")
  public void regBoard(@RequestBody BoardDTO boardDTO) {
    System.out.println("게시글 등록 API 호출");
    System.out.println(boardDTO);
    boardService.insertBoard(boardDTO);
  }
  //게시글 수정 API
  @PutMapping("/boards/{boardNum}")
  public int updateBoard(
          @PathVariable("boardNum") int boardNum,
          @RequestBody BoardDTO boardDTO
  ) {
    System.out.println("boardNum = " + boardNum);
    System.out.println(boardDTO);

    //boardDTO에 boardNum값을 넣어줘야 함
    boardDTO.setBoardNum(boardNum);

    int result = boardService.updateBoard(boardDTO);
    return result;
  }
  //게시글 삭제 API
  @DeleteMapping("boards/{boardNum}")
  public int deleteBoard(
          @PathVariable("boardNum") int boardNum
  ) {
    int result = boardService.deleteBoard(boardNum);
    return result;
  }
}
