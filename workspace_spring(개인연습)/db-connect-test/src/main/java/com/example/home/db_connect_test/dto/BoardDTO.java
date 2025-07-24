package com.example.home.db_connect_test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int redCnt;
  private LocalDateTime createDate;
}
