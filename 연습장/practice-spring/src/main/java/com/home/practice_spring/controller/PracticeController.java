package com.home.practice_spring.controller;

import com.home.practice_spring.service.PracticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PracticeController {

  private PracticeService practiceService;

  @Autowired
  public PracticeController(PracticeService practiceService) {
    this.practiceService = practiceService;
  }

  @PostMapping("/members")
  public void regMember() {
    practiceService.regMember();
  }

  @PutMapping("/members")
  public void changeMember() {
    practiceService.changeMember();
  }

  @DeleteMapping("/members")
  public void deleteMember() {
    practiceService.deleteMember();
  }
}
