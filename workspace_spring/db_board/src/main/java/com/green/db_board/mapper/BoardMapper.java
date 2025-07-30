package com.green.db_board.mapper;

import com.green.db_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDTO> getBoardList();
  void regBoard(BoardDTO boardDTO);
  BoardDTO getBoard(int boardNum);
}
