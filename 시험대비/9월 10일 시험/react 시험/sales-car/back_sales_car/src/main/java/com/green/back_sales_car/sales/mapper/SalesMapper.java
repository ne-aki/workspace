package com.green.back_sales_car.sales.mapper;

import com.green.back_sales_car.sales.dto.SalesDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SalesMapper {
  //판매정보 등록
  public void regSalesInfo(SalesDTO salesDTO);
}
