package com.green.back_sales_car.sales.mapper;

import com.green.back_sales_car.sales.dto.SalesDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalesMapper {
  //판매정보 등록
  public void regSalesInfo(SalesDTO salesDTO);

  //판매정보 목록 조회
  public List<SalesDTO> getSalesList();
}
