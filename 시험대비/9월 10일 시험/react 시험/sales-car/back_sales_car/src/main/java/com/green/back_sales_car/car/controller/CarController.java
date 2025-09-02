package com.green.back_sales_car.car.controller;

import com.green.back_sales_car.car.dto.CarDTO;
import com.green.back_sales_car.car.service.CarService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/cars")
public class CarController {
  private final CarService carService;

  //차량 등록 api
  @PostMapping("")
  public void regCar(@RequestBody CarDTO carDTO) {
    log.info(carDTO.toString());
    carService.regCar(carDTO);
  }

  //차량 목록 조회 api
  @GetMapping("")
  public List<CarDTO> getCarList() {
    return carService.getCarList();
  }

  //모델명 조회 api
  @GetMapping("/get-model")
  public List<CarDTO> getModelName() {
    return carService.getModelName();
  }
}
