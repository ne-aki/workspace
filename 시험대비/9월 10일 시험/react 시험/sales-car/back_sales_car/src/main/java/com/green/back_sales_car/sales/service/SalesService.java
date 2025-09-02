package com.green.back_sales_car.sales.service;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SalesService {
  private int salesNum;
  private String buyerName;
  private String buyerTel;
  private String color;
  private LocalDateTime SaleDate;
  private int modelNum;
}
