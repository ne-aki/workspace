import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios';

const OrderList = ({orderListInfo, setSelectOrderList, setIsShowDetail, setIsShowReg}) => {
  const showDetail = (e) => {
    setIsShowDetail(true);
    setSelectOrderList(e);
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
            orderListInfo.map((e, i) => {
              return (
                <tr key={i} onClick={event => showDetail(e)}>
                  <td>{orderListInfo.length - i}</td>
                  <td>{e.itemName}</td>
                  <td>{e.price}원</td>
                  <td>{e.cnt}</td>
                  <td>{e.price * e.cnt}원</td>
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