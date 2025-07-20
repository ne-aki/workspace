import React from 'react'
import './OrderDetail.css'

const OrderDetail = (props) => {
  return (
    <div className='order-detail'>
      <h2>주문 상세 정보</h2>
      <table className='order-detail-table'>
        <colgroup>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
        </colgroup>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>{props.selectOrderList.itemNum}</td>
            <td>상품명</td>
            <td>{props.selectOrderList.itemName}</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>{props.selectOrderList.price}원</td>
            <td>수량</td>
            <td>{props.selectOrderList.cnt}</td>
          </tr>
          <tr>
            <td>주문자ID</td>
            <td>{props.selectOrderList.id}</td>
            <td>구매금액</td>
            <td>{props.selectOrderList.price * props.selectOrderList.cnt}원</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="button" onClick={() => {
          props.setIsShowDetail(false);
        }}>닫기</button>
      </p>
    </div>
  )
}

export default OrderDetail