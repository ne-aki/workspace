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

  /**
   * 할 일 삭제 API
   * - HTTP Method: DELETE
   * - URL: /todo/{todoNum}
   * - 경로 변수로 삭제할 할 일 번호를 받아서 해당 할 일을 삭제
   * @param todoNum 삭제할 할 일의 번호 (URL 경로에서 전달됨)
   * @return ResponseEntity - 성공 시 200 OK, 실패 시 400 또는 500 상태 코드와 에러 메시지
   */
  @DeleteMapping("/{todoNum}")
  public ResponseEntity<?> delete(@PathVariable int todoNum) {
    try {
      // 유효성 검증: todoNum이 0 이하면 잘못된 요청으로 간주
      // (데이터베이스의 PRIMARY KEY는 1부터 시작하므로 0 이하는 유효하지 않음)
      if (todoNum <= 0) {
        // 강제로 예외를 발생시켜 catch 블록으로 이동
        throw new Exception();
      }

      // TodoService의 deleteTodo 메서드를 호출하여 실제 삭제 작업 수행
      todoService.deleteTodo(todoNum);

      // 삭제 성공 시 200 OK 상태 코드 반환 (응답 본문 없음)
      return ResponseEntity
              .status(HttpStatus.OK)
              .build();
    } catch (Exception e) {
      // 예외 발생 시 콘솔에 에러 스택 트레이스 출력 (디버깅용)
      e.printStackTrace();

      // 파라미터 에러인지 확인 (todoNum이 0 이하인 경우)
      boolean isParamError = todoNum <= 0;

      // 에러 유형에 따라 적절한 HTTP 상태 코드와 메시지 반환
      return ResponseEntity
              .status(
                      // 파라미터 에러면 400 BAD_REQUEST, 아니면 500 INTERNAL_SERVER_ERROR
                      isParamError ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR
              )
              .body(
                      // 에러 유형에 따른 사용자 친화적 메시지 반환
                      isParamError ?
                              "입력한 할 일 번호가 정상적이지 않습니다." :
                              "할 일 삭제 기능 실행 중 오류가 발생했습니다."
              );
    }
  }
}
