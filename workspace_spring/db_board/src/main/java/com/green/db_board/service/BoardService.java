package com.green.db_board.service;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.mapper.BoardMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
  private BoardMapper boardMapper;
  public BoardService(BoardMapper boardMapper) {
    this.boardMapper = boardMapper;
  }

  public List<BoardDTO> getBoardList() {
    return boardMapper.getBoardList();
  }

  public void regBoard(BoardDTO boardDTO) {
    boardMapper.regBoard(boardDTO);
  }

  public BoardDTO getBoard(int boardNum) {
    return boardMapper.getBoard(boardNum);
  }

  public int deleteBoard(int boardNum) {
    return boardMapper.deleteBoard(boardNum);
  }

  public int updateBoard(BoardDTO boardDTO) {
    return boardMapper.updateBoard(boardDTO);
  }
}
