package com.green.basic_board2.contoller;

import com.green.basic_board2.dto.BoardDTO;
import com.green.basic_board2.mapper.BoardMapper;
import com.green.basic_board2.service.BoardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards") //공통으로 쓰고있는 url 정보
public class BoardController {
  private BoardService boardService;

  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }

  //게시글 등록 API
  @PostMapping("")
  public void regBoard(@RequestBody BoardDTO boardDTO) {
    System.out.println("게시글 등록 API 호출");
    System.out.println(boardDTO);
    boardService.insertBoard(boardDTO);
  }
  //게시글 수정 API
  @PutMapping("/{boardNum}")
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
  @DeleteMapping("/{boardNum}")
  public int deleteBoard(
          @PathVariable("boardNum") int boardNum
  ) {
    int result = boardService.deleteBoard(boardNum);
    return result;
  }
  //게시글 목록 조회 API
  @GetMapping("")
  public List<BoardDTO> getBoardList() {
    return boardService.getBoardList();
  }
  //하나의 게시글 조회 API
  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(
          @PathVariable("boardNum") int boardNum
  ) {
    BoardDTO result = boardService.getBoard(boardNum);
    System.out.println(result);
    return result;
  }
  //입력받은 문자열이 포함된 제목의 게시글 목록 조회 API
  @GetMapping("/search/{title}")
  public List<BoardDTO> searchTitle(
          @PathVariable("title") String title
  ) {
    List<BoardDTO> result = boardService.searchTitle(title);
    System.out.println(result);
    return result;
  }
}
