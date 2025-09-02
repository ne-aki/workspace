package com.green.back_sales_car.car.service;

import com.green.back_sales_car.car.dto.CarDTO;
import com.green.back_sales_car.car.mapper.CarMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {
  private final CarMapper carMapper;

  //차량 등록
  public void regCar(CarDTO carDTO) {
    carMapper.regCar(carDTO);
  }

  //차량 목록 조회
  public List<CarDTO> getCarList() {
    return carMapper.getCarList();
  }

  //모델명 조회
  public List<CarDTO> getModelName() {
    return carMapper.getModelName();
  }
}
