package com.green.restful.controller;

import com.green.restful.dto.EmpDTO;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmpController {
  //모든 사원 정보를 조회하는 API
  @GetMapping("/emps")
  public String getEmpList() {
    return "사원 정보 조회 성공";
  }
  //한 명의 사원 정보를 조회하는 API
  @GetMapping("/emps/{empNo}")
  public String getEmp(@PathVariable("empNo") int a) {
    System.out.println("a = " + a);
    return "한 명의 사원 정보 조회 성공";
  }
  //한 명의 사원을 등록하는 API (사원명, 직급, 급여 정보를 등록)
  @PostMapping("/emps")
  public String regEmp(@RequestBody EmpDTO empDTO) {
    System.out.println(empDTO.toString());
    return "한 명의 사원 등록 성공";
  }
  //한 명의 사원을 삭제하는 API
  @DeleteMapping("/emps/{empNo}")
  public String deleteEmp(@PathVariable("empNo") int a) {
    System.out.println(a);
    return "한 명의 사원 삭제 성공";
  }
  //한 명의 사원 정보를 수정하는 API (직급, 급여를 수정)
  @PutMapping("/emps/{empNo}")
  public String updateEmp(@RequestBody EmpDTO empDTO, @PathVariable("empNo") int a) {
    System.out.println(empDTO);
    System.out.println(a);
    return "한 명의 사원 정보 수정 성공";
  }
}
