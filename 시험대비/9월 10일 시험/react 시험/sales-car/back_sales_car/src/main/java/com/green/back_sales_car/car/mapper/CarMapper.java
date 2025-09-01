package com.green.back_sales_car.car.mapper;

import com.green.back_sales_car.car.dto.CarDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CarMapper {
  //차량 등록
  public void regCar(CarDTO carDTO);
  //차량 목록 조회
  public List<CarDTO> getCarList();
}
