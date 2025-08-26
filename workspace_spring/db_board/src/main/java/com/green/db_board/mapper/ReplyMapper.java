package com.green.db_board.mapper;

import com.green.db_board.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {
  List<ReplyDTO> getReplyList(int boardNum);
  int regReply(ReplyDTO replyDTO);
  int deleteReply(int replyNum);
}
