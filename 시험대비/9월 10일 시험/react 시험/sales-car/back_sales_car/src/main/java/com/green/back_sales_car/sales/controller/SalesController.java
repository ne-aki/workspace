package com.green.back_sales_car.sales.controller;

import com.green.back_sales_car.sales.dto.SalesDTO;
import com.green.back_sales_car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sales-cars")
@Slf4j
@RequiredArgsConstructor
public class SalesController {
  private final SalesService salesService;

  @PostMapping("")
  public void regSalesInfo(@RequestBody SalesDTO salesDTO) {
    salesService.regSalesInfo(salesDTO);
  }
}
