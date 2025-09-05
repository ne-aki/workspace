package com.green.backend_shop.buy.dto;

import lombok.Data;

//구매 목록 페이지에서 전달되는 검색 데이터를 받기 위한 클래스
@Data
public class SearchBuyDTO {
  private String orderNum;
  private String memId;
  private String toDate;
  private String fromDate;
}
