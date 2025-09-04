package com.green.back_sales_car.sales.service;
import com.green.back_sales_car.sales.dto.SalesDTO;
import com.green.back_sales_car.sales.mapper.SalesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {
  private final SalesMapper salesMapper;

  //판매정보 등록
  public void regSalesInfo(SalesDTO salesDTO) {
    salesMapper.regSalesInfo(salesDTO);
  }

  //판매정보 목록 조회
  public List<SalesDTO> getSalesList() {
    return salesMapper.getSalesList();
  }
}
