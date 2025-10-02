package com.green.to_do;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
  private final TodoMapper todoMapper;

  public List<TodoDTO> getTodoList() {
    getAllName("a");
    getAllName("a", "b");
    getAllName("a", "b", "c");

    return todoMapper.getTodoList();
  }

  public void getAllName (String... a) {
    //매개변수는 배열로 인지
    for (String e : a) {
      System.out.println(e);
    }
  }

  /**
   * 할 일 제목을 전달받아 새로운 할 일을 데이터베이스에 등록하는 메서드
   * @param todoTitle 등록할 할 일의 제목
   */
  public void addTodo(String todoTitle) {
    todoMapper.addTodo(todoTitle);
  }

  /**
   * 할 일 번호를 전달받아 해당 할 일을 데이터베이스에서 삭제하는 메서드
   * @param todoNum 삭제할 할 일의 번호 (고유 식별자)
   */
  public void deleteTodo(int todoNum) {
    // TodoMapper의 deleteTodo 메서드를 호출하여 실제 DB 삭제 작업 수행
    todoMapper.deleteTodo(todoNum);
  }

  public void updateTodo(TodoDTO todoDTO) {
    todoMapper.updateTodo(todoDTO);
  }
}
