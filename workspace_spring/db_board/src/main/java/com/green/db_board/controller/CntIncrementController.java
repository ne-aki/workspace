package com.green.db_board.controller;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.service.CntIncrementService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CntIncrementController {
  private CntIncrementService cntIncrementService;
  public CntIncrementController(CntIncrementService cntIncrementService) {
    this.cntIncrementService = cntIncrementService;
  }

  @PutMapping("/cnt-increment/{boardNum}")
  public void setCntIncrement(@PathVariable("boardNum") int boardNum) {
    cntIncrementService.setCntIncrement(boardNum);
  }

}
