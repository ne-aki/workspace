package com.green.to_do;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * MyBatis Mapper 인터페이스
 * todo-mapper.xml 파일과 연결되어 실제 SQL 쿼리를 실행
 */
@Mapper
public interface TodoMapper {
  /**
   * 데이터베이스에서 모든 할 일 목록을 조회하는 메서드
   * @return 할 일 목록을 담은 List<TodoDTO>
   */
  public List<TodoDTO> getTodoList();

  /**
   * 새로운 할 일을 데이터베이스에 추가하는 메서드
   * @param todoTitle 추가할 할 일의 제목
   */
  public void addTodo(String todoTitle);

  /**
   * 할 일 번호를 기준으로 해당 할 일을 데이터베이스에서 삭제하는 메서드
   * @param todoNum 삭제할 할 일의 번호 (PRIMARY KEY)
   */
  public void deleteTodo(int todoNum);
}
