package com.green.db_board.mapper;

import com.green.db_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CntIncrementMapper {
  void cntIncrement(int boardNum);
}
