import React from 'react'
import './Registration.css'
import axios from 'axios';

const Registration = ({
  regOrder, setRegOrder, setOrderListInfo, orderListInfo, setIsShowReg
}) => {
  //입력했을 때
  const handleRegOrder = e => {
    setRegOrder({
      ...regOrder,
      [e.target.name] : e.target.value
    })
  };
  const regBtn = () => {
    axios.post('/api/rest-order-infos', regOrder)
    .then(res => {
      setOrderListInfo([...res.data, ...orderListInfo]);
      console.log(res.data);
    })
    .catch(error => console.log(error));
    alert('등록되었습니다.');
    setIsShowReg(false);
    setRegOrder({
      itemNum : '',
      itemName : '',
      price : 0,
      cnt : 1,
      id : ''
    })
  };
  const cancel = () => setIsShowReg(false)
  return (
    <div className='reg'>
      <h2>주문 등록</h2>
      <table className='reg-table'>
        <colgroup>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
        </colgroup>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input
                type="text"
                name='itemNum'
                placeholder='상품번호 입력'
                value={regOrder.itemNum}
                onChange={e => handleRegOrder(e)}
              />
            </td>
            <td>상품명</td>
            <td>
              <input
                type="text"
                name='itemName'
                placeholder='상품명 입력'
                value={regOrder.itemName}
                onChange={e => handleRegOrder(e)}
              />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input
                type="text"
                name='price'
                placeholder='가격 입력'
                value={regOrder.price}
                onChange={e => handleRegOrder(e)}
              />
            </td>
            <td>수량</td>
            <td>
              <input
                type="number"
                name='cnt'
                placeholder='개수 입력'
                value={regOrder.cnt}
                onChange={e => handleRegOrder(e)}
              />
            </td>
          </tr>
          <tr>
            <td>주문자ID</td>
            <td>
              <input
                type="text"
                name='id'
                placeholder='ID 입력'
                value={regOrder.id}
                onChange={e => handleRegOrder(e)}
              />
            </td>
            <td>구매금액</td>
            <td>{regOrder.price * regOrder.cnt}원</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button
          type="button"
          onClick={e => cancel()}
        >
          취소
        </button>
        <button
          type="button"
          onClick={e => regBtn()}
        >
          등록 완료
        </button>
      </p>
    </div>
  )
}

export default Registration