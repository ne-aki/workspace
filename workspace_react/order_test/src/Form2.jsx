import axios from 'axios';
import React, { useState } from 'react'
import './Form2.css'

const Form2 = () => {
  const[chickenDelivery, setChickenDelivery] = useState({
    menu : '후라이드 치킨',
    cnt : '',
    addr : '',
    addrDetail : '',
    request : ''
  });
  const handleChickenDelivery = e => {
    setChickenDelivery({
      ...chickenDelivery,
      [e.target.name] : e.target.value
    })
  }
  const orderBtn = e => {
    axios.post('/api/chickens', chickenDelivery)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error))
    alert('주문이 완료되었습니다.')
  }
  console.log(chickenDelivery);
  
  return (
    <div className='Form2-container'>
      <h1>치킨!!</h1>
      <h3>치킨 종류와 상관 없이 무조건 만원!</h3>
      <table className='Form2-table'>
        <tbody>
          <tr>
            <td>
              <input type="radio" name="menu"
                    value={'후라이드 치킨'} checked={chickenDelivery.menu === '후라이드 치킨'} onChange={e => handleChickenDelivery(e)} /> 후라이드 치킨
            </td>
            <td>
              <input type="radio" name="menu"
                    value={'양념치킨'} checked={chickenDelivery.menu === '양념치킨'} onChange={e => handleChickenDelivery(e)} /> 양념치킨
            </td>
            <td>
              <input type="radio" name="menu"
                    value={'간장치킨'} checked={chickenDelivery.menu === '간장치킨'} onChange={e => handleChickenDelivery(e)} /> 간장치킨
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="menu"
                    value={'고추바사삭'} checked={chickenDelivery.menu === '고추바사삭'} onChange={e => handleChickenDelivery(e)} /> 고추바사삭
            </td>
            <td>
              <input type="radio" name="menu"
                    value={'뿌링클'} checked={chickenDelivery.menu === '뿌링클'} onChange={e => handleChickenDelivery(e)} /> 뿌링클
            </td>
            <td>
              <input type="radio" name="menu"
                    value={'매운핫치킨'} checked={chickenDelivery.menu === '매운핫치킨'} onChange={e => handleChickenDelivery(e)} /> 매운핫치킨
            </td>
          </tr>
        </tbody>
      </table>
      <h3>
        몇마리
        <input type="number" name="cnt" value={chickenDelivery.cnt} onChange={e => handleChickenDelivery(e)} className='cntInput' /> <br />
      </h3>
      <h3>배달주소</h3>
      <select name="addr" value={chickenDelivery.addr} onChange={e => handleChickenDelivery(e)} className='addr-select'>
        <option value="">동을 선택하세요</option>
        <option value="삼산동">삼산동</option>
        <option value="달동">달동</option>
        <option value="신천동">신천동</option>
      </select>
      <br />
      <h3>배달주소 상세</h3>
      <input type="text" name="addrDetail" value={chickenDelivery.addrDetail} onChange={e => handleChickenDelivery(e)} className='detailInput' /> <br />
      <h3>요청사항</h3>
      <textarea rows={5} name="request" value={chickenDelivery.request} onChange={e => handleChickenDelivery(e)}></textarea> <br />
      <p className='Form2-btn-div'>
        <button type="button" onClick={e => orderBtn(e)} className='Form2-btn'>주문하러 가기</button>
      </p>
    </div>
  )
}

export default Form2