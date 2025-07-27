package com.example.home.db_connect_test.service;

import com.example.home.db_connect_test.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
  @Autowired
  private BoardMapper boardMapper;
  public BoardService(BoardMapper boardMapper) {
    this.boardMapper = boardMapper;
  }

  //작성 기능
  public void postBoard() {
    boardMapper.createBoard();
  }
}
