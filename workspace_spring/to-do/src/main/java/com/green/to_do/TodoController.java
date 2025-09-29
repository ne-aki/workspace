package com.green.to_do;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
public class TodoController {
  private final TodoService todoService;

  @GetMapping("")
  public ResponseEntity<?> getList() {
    try {
      List<TodoDTO> todoList = todoService.getTodoList();
      return ResponseEntity
              .status(HttpStatus.OK)
              .body(todoList);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity
              .status(HttpStatus.INTERNAL_SERVER_ERROR)
              .body("할 일 목록 조회 중 오류가 발생했습니다.");
    }
  }

  @PostMapping("")
  public ResponseEntity<?> add(@RequestBody TodoDTO todoDTO) {
    try {
      //제목으로 빈 문자가 전달됐으면...
      if (todoDTO.getTodoTitle().equals("")) {
        //강제로 예외(오류)를 발생시킴
        throw new Exception();
      }

      todoService.addTodo(todoDTO.getTodoTitle());
      return ResponseEntity
              .status(HttpStatus.CREATED)
              .build();
    } catch (Exception e) {
      e.printStackTrace();

      boolean isParamError = todoDTO.getTodoTitle() == null || todoDTO.equals("");
      return ResponseEntity
              .status(
                      isParamError ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR
              )
              .body(
                      isParamError ?
                              "입력한 제목 데이터가 정상적이지 않습니다." :
                              "할 일 등록 기능 실행 중 오류가 발생했습니다."
              );
      //1. 앱에서 입력한 할 일 제목이 이상할 경우
//      if (todoDTO.getTodoTitle() == null || todoDTO.equals("")) {
//        return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST) //400 전달되는 데이터가 이상할 경우
//                .body("입력한 제목 데이터가 정상적이지 않습니다.");
//      }
//      //2. 쿼리문 자체에 오류가 있을 경우
//      else {
//        return ResponseEntity
//                .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body("할 일 등록 기능 실행 중 오류가 발생했습니다.");
//      }
    }

  }
}
