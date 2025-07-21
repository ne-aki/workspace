import axios from 'axios'
import React from 'react'

const Test3 = () => {
  const data = {
    itemName : '상품1',
    price : 5000,
    cnt : 3
  };
  //매개변수 두번째 자리에 객체가 바로 들어올 수 있다.
  axios.post('/api/rest-order-infos', data)
  .then(res => {
    console.log(res.data)
  })
  //화살표 함수에서 매개변수 하나일 때 생략가능 뒤에 중괄호도 
  .catch(error => console.log(error))
  return (
    <div>Test3</div>
  )
}

export default Test3