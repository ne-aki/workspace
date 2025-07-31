package com.green.db_board.service;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.mapper.CntIncrementMapper;
import org.springframework.stereotype.Service;

@Service
public class CntIncrementService {
  private CntIncrementMapper cntIncrementMapper;
  public CntIncrementService(CntIncrementMapper cntIncrementMapper) {
    this.cntIncrementMapper = cntIncrementMapper;
  }

  public void setCntIncrement(int boardNum) {
    cntIncrementMapper.cntIncrement(boardNum);
  }
}
