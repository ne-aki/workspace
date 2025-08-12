package com.green.backend_student.controller;

import com.green.backend_student.mapper.StuMapper;
import com.green.backend_student.service.StuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class StuController {
  private StuService stuService;

  public StuController(StuService stuService) {
    this.stuService = stuService;
  }

  @GetMapping("")
  public String getClassName() {
    return stuService.getClassName();
  }
}
