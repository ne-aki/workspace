package com.green.backend_shop.buy.service;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.mapper.BuyMapper;
import com.green.backend_shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;
  private final CartMapper cartMapper;

  //도서 상세 페이지 - 구매하기
  public int buyBook(BuyDTO buyDTO) {
    return buyMapper.insertBuy(buyDTO);
  }

  //장바구니 페이지 - 구매하기
  //구매는
  // 1. SHOP_BUY 테이블에 INSERT 쿼리와
  // 2. SHOP_CART 테이블의 DELETE 쿼리
  // 두 쿼리 실행으로 이루어져 있다.
  // 두 쿼리는 둘 다 성공해야 성공으로 판단할 수 있기 때문에
  // Transaction을 사용하여 두 쿼리를 하나의 묶음으로 간주해야 한다.
  // Transactional 어노테이션이 선언된 메서드 내의 모든 쿼리는 하나의 묶음으로 간주함
  // -> 메서드 내 모든 쿼리실행 명령어가 정상 작동되어야지만 commit을 진행함.
  //rollbackFor : 이 속성에는 어떤 경우에 롤백을 진행할지 설정할 수 있는 속성
  //rollbackFor = Exception.class
  // -> Exception.class 의미는 모든 오류에 대해(이유 불문하고) 오류가 발생하는 무조건 롤백시키겠다.
  @Transactional(rollbackFor = Exception.class)
  public void buyAll(BuyDTO buyDTO) {
    //SHOP_BUY 테이블에 구매정보를 INSERT
    buyMapper.buyAll(buyDTO);

    //구매한 장바구니 정보는 SHOP_CART 테이블에서 DELETE
    cartMapper.deleteCartAll(buyDTO);


  }
  //관리자 구매이력조회 페이지의 구매목록조회
  public List<BuyDTOForAdmin> getBuyListForAdmin() {
    return buyMapper.getBuyListForAdmin();
  }

  //관리자 상세목록 조회
  public List<BuyDTO> getBuyDetail(int orderNum) {
    return buyMapper.getBuyDetail(orderNum);
  }
}
