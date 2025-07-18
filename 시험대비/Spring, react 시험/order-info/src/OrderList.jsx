import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios';

const OrderList = (props) => {

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
            props.orderListInfo.map((e, i) => {
              return (
                <tr key={i} onClick={() => {
                  props.setIsShowDetail(true);
                  props.setSelectOrderList(e);
                }}>
                  <td>{props.orderListInfo.length - i}</td>
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
    </div>
  )
}

export default OrderList