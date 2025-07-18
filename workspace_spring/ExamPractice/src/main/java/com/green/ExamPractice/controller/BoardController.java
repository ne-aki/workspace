package com.green.ExamPractice.controller;

import com.green.ExamPractice.dto.BoardDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BoardController {
  //게시글 목록 데이터
  @GetMapping("/boards")
  public List<BoardDTO> getBoard() {
    List<BoardDTO> boardDTOList = new ArrayList<>();
    boardDTOList.add(new BoardDTO(0, "제목1", "작성자1", "내용1", 15));
    boardDTOList.add(new BoardDTO(0, "제목2", "작성자2", "내용2", 12));
    boardDTOList.add(new BoardDTO(0, "제목3", "작성자3", "내용3", 47));
    boardDTOList.add(new BoardDTO(0, "제목4", "작성자4", "내용4", 51));
    boardDTOList.add(new BoardDTO(0, "제목5", "작성자5", "내용5", 33));
    return boardDTOList;
  }
}
