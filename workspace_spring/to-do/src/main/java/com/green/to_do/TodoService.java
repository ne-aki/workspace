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

  public void addTodo(String todoTitle) {
    todoMapper.addTodo(todoTitle);
  }
}
