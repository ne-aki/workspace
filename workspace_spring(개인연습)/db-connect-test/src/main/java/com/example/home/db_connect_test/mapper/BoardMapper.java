package com.example.home.db_connect_test.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
  //게시글 목록 조회
  //게시글 조회
  //게시글 등록
  void createBoard();
  //게시글 삭제
  //게시글 수정
}
