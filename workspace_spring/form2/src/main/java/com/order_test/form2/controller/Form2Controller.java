package com.order_test.form2.controller;

import com.order_test.form2.dto.ChickenDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Form2Controller {
  //치킨 주문받기 api
  @PostMapping("/chickens")
  public String orderChicken(@RequestBody ChickenDTO chickenDTO) {
    System.out.println("치킨 주문");
    System.out.println(chickenDTO);
    return "치킨 주문 완료";
  }
}
