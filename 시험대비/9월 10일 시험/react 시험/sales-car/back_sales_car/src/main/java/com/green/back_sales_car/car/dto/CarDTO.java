package com.green.back_sales_car.car.dto;

import lombok.Data;

@Data
public class CarDTO {
  private int modelNum;
  private String modelName;
  private int price;
  private String manufacturer;
}
