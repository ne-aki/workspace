package com.green.restful.controller;

import com.green.restful.dto.InputTest6DTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InputTest6Controller {
  @PostMapping("/infos")
  public String insertInfo(@RequestBody InputTest6DTO inputTest6DTO) {
    System.out.println("등록");
    System.out.println(inputTest6DTO);
    return "완료";
  }
}
