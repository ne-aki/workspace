package com.green.db_board.service;

import com.green.db_board.dto.ReplyDTO;
import com.green.db_board.mapper.ReplyMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyService {
  private ReplyMapper replyMapper;

  public ReplyService(ReplyMapper replyMapper) {
    this.replyMapper = replyMapper;
  }

  public List<ReplyDTO> getReplyList() {
    return replyMapper.getReplyList();
  }

  public int regReply(ReplyDTO replyDTO) {
    return replyMapper.regReply(replyDTO);
  }
}
