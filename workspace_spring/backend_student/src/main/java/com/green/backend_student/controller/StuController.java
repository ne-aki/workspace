package com.green.backend_student.controller;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import com.green.backend_student.service.StuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StuController {
  private StuService stuService;

  public StuController(StuService stuService) {
    this.stuService = stuService;
  }

  @GetMapping("classes")
  public List<ClassDTO> getClassName() {
    return stuService.getClassName();
  }

  @GetMapping("students")
  public List<StuDTO> getStudentList() {
    return stuService.getStudentList();
  }

  @GetMapping("students/{classNum}")
  public List<StuDTO> selectedStudents(@PathVariable("classNum") int classNum) {
    return stuService.selectedStudents(classNum);
  }
}
