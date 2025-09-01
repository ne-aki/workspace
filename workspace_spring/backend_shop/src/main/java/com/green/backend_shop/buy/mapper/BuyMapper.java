package com.green.backend_shop.buy.mapper;

import com.green.backend_shop.buy.dto.BuyDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BuyMapper {
  int insertBuy(BuyDTO buyDTO);
  void buyAll(BuyDTO buyDTO);
}
