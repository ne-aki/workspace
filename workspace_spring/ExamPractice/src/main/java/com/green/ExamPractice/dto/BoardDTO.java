package com.green.ExamPractice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int view;

  public BoardDTO() {}

  public BoardDTO(int boardNum, String title, String writer, String content, int view) {
    this.boardNum = boardNum;
    this.title = title;
    this.writer = writer;
    this.content = content;
    this.view = view;
  }
}
