package com.green.db_board.controller;

import com.green.db_board.dto.ReplyDTO;
import com.green.db_board.service.ReplyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/replies")
public class ReplyController {
  private ReplyService replyService;

  public ReplyController(ReplyService replyService) {
    this.replyService = replyService;
  }

  @GetMapping("/{boardNum}")
  public List<ReplyDTO> getReplyList(@PathVariable("boardNum") int boardNum) {
    return replyService.getReplyList(boardNum);
  }

  @PostMapping("")
  public int regReply(@RequestBody ReplyDTO replyDTO) {
    return replyService.regReply(replyDTO);
  }

  @DeleteMapping("/{replyNum}")
  public int deleteReply(@PathVariable("replyNum") int replyNum) {
    return replyService.deleteReply(replyNum);
  }
}
