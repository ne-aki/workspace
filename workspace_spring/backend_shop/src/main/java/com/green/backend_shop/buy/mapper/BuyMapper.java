package com.green.backend_shop.buy.mapper;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BuyMapper {
  int insertBuy(BuyDTO buyDTO);
  void buyAll(BuyDTO buyDTO);

  //관리자 구매이력 조회 페이지의 구매목록조회
  public List<BuyDTOForAdmin> getBuyListForAdmin();

  //구매 내역 상세 조회
  public List<BuyDTO> getBuyDetail(int orderNum);
}
