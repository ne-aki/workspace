import React, { useState } from 'react'

//구매 정보 데이터를 입력받는 input 태그를 만들고 해당 input 태그에 입력한 정보를 buyInfo 변수에 저장시켜 보세요.
//입력 받는 구매정보로는 상품명, 수량, 가격, 구매자명이 있다.
//이 때, 수량의 초기값은 1, 가격의 초기값은 0으로 지정
//수량 input 태그의 type은 number로 지정

const InputTest5 = () => {
  const [buyInfo, setBuyInfo] = useState({
    itemName : '',
    cnt : 1,
    price : 0,
    buyer : ''
  })
  const handleBuyInfo = (e) => {
    setBuyInfo({
      ...buyInfo,
      [e.target.name] : e.target.value
    })
  }
  console.log(buyInfo);

  return (
    <div>
      상품명 : <input
                type="text"
                value={buyInfo.itemName}
                name='itemName'
                onChange={e => handleBuyInfo(e)}
              /> <br />
      수량 : <input
              type="number"
              value={buyInfo.cnt}
              name='cnt'
              onChange={e => handleBuyInfo(e)}
            /> <br />
      가격 : <input
              type="text"
              value={buyInfo.price}
              name='price'
              onChange={e => handleBuyInfo(e)}
            /> <br />
      구매자명 : <input
                  type="text"
                  value={buyInfo.buyer}
                  name='buyer'
                  onChange={e => handleBuyInfo(e)}
                /> <br />
    </div>
  )
}

export default InputTest5