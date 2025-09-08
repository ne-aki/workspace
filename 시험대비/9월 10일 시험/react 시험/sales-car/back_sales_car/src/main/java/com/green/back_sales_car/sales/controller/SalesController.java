package com.green.back_sales_car.sales.controller;

import com.green.back_sales_car.sales.dto.SalesDTO;
import com.green.back_sales_car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("sales-cars")
@Slf4j
@RequiredArgsConstructor
public class SalesController {
  private final SalesService salesService;

  @PostMapping("")
  public void regSalesInfo(@RequestBody SalesDTO salesDTO) {
    if (salesDTO.getBuyerTel().equals("")) {
      salesDTO.setBuyerTel(null);
    }
    salesService.regSalesInfo(salesDTO);
  }

  @GetMapping("")
  public List<SalesDTO> getSalesList() {
    return salesService.getSalesList();
  }
}
