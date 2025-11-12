package com.green.jwt_board.service;

import com.green.jwt_board.dto.BoardDTO;
import com.green.jwt_board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
  private final BoardMapper boardMapper;

  public List<BoardDTO> getBoardList() {
    return boardMapper.getList();
  }

  public void write(BoardDTO boardDTO) {
    boardMapper.write(boardDTO);
  }

  public BoardDTO getDetail(int boardNum) {
    return boardMapper.getDetail(boardNum);
  }

  public void deleteBoard(int boardNum) {
    boardMapper.deleteBoard(boardNum);
  }

  public void updateBoard(BoardDTO boardDTO) {
    boardMapper.updateBoard(boardDTO);
  }
}
