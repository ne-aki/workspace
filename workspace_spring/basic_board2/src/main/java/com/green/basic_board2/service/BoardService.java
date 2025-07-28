package com.green.basic_board2.service;

import com.green.basic_board2.dto.BoardDTO;
import com.green.basic_board2.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
  private BoardMapper boardMapper;

  //생성자를 이용한 의존성 주입
  //생성자가 하나밖에 없으면 @Autowired 생략 가능
  public BoardService(BoardMapper boardMapper) {
    this.boardMapper = boardMapper;
  }
  //게시글 등록 메서드
  public void insertBoard(BoardDTO boardDTO) {
    System.out.println("게시글 등록을 시작합니다.");
    boardMapper.insertBoard(boardDTO);
    System.out.println("등록 완료!");
  }
  //게시글 수정 메서드
  public int updateBoard(BoardDTO boardDTO) {
    //update 쿼리 실행 결과 영향을 받은 행의 개수
    int result = boardMapper.updateBoard(boardDTO);
    return result;
  }
  //게시글 삭제 메서드
  public int deleteBoard(int boardNum) {
    int result = boardMapper.deleteBoard(boardNum);
    return result;
  }
}
