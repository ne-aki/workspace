import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios';

const OrderList = ({orderListInfo, setSelectOrderList, setIsShowDetail, setIsShowReg, selectOrderList}) => {
  
  const showDetail = (each, event) => {
    setSelectOrderList(each)
    axios.get(`rest-order-infos/${each.itemNum}`)
    .then(res => {
      console.log(res.data);
      console.log(event);
    })
    .catch(error => console.log(error));
    setIsShowDetail(true);
    setIsShowReg(false);
  }
  const regOrderBtn = () => {
    setIsShowReg(true);
    setIsShowDetail(false);
  }

  return (
    <div className="order-list">
      <h2>주문목록</h2>
      <table className='order-list-table'>
        <thead>
          <tr>
            <td>No</td>
            <td>상품명</td>
            <td>상품가격</td>
            <td>수량</td>
            <td>총구매가격</td>
          </tr>
        </thead>
        <tbody>
          {
            orderListInfo.map((each, i) => {
              return (
                <tr
                  key={i}
                  onClick={event => showDetail(each, event)}
                  
                >
                  <td>{orderListInfo.length - i}</td>
                  <td>{each.itemName}</td>
                  <td>{each.price}원</td>
                  <td>{each.cnt}</td>
                  <td>{each.total}원</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <p>
        <button type="button" onClick={() => regOrderBtn()}>
          주문 등록
        </button>
      </p>
    </div>
  )
}

export default OrderList