import axios from 'axios';
import React, { useEffect, useState } from 'react'

//상품명, 상품가격, 수량을 입력할 수 있는 input태그 생성
const InputTest2 = () => {
  // const[itemNameInfo, setItemNameInfo] = useState('');
  // const[priceInfo, setPriceInfo] = useState('');
  // const[cntInfo, setCntInfo] = useState('');

  //input 태그에 입력한 내용을 저장할 state 변수
  const [orderInfo, setOrderInfo] = useState({
    itemName : '',
    price : 0,
    cnt : 1
  });

  console.log(orderInfo);
  const regOrder = () => {
    axios.post('/api/rest-order-infos', orderInfo)
    .then(res => {console.log(res.data)})
    .catch(error => console.log(error))
  }

  return (
    <div>
      {/* input태그에는 value속성을 넣어줘야함 */}
      상품명 : <input value={orderInfo.itemName} type="text" onChange={e => {
        // orderInfo.itemName = e.target.value;
        setOrderInfo({
          ...orderInfo,
          itemName : e.target.value
        });
      }} /> <br />
      상품가격 : <input value={orderInfo.price} type="text" onChange={e => {
        setOrderInfo({
          ...orderInfo,
          price : e.target.value
        })
      }} /> <br />
      수량 : <input value={orderInfo.cnt} type="number" onChange={e => {
        setOrderInfo({
          ...orderInfo,
          cnt : e.target.value
        })
      }} /> <br />
      <button type="button" onClick={e => regOrder()}>등록</button>
    </div>
  )
}

export default InputTest2