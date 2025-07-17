import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios';

const OrderList = () => {
  const[orderListInfo, getOrderListInfo] = useState([]);
  useEffect(() => {
    axios.get('/api/rest-order-infos')
    .then((res) => {
      console.log(res.data);
      getOrderListInfo(res.data);
    })
    .then((error) => console.log(error))
  }, [])
  return (
    <div className="order-list">
      <h3>주문목록</h3>
      <table>
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
                <tr key={i}>
                  <td>{orderListInfo.length - i}</td>
                  <td>{e.itemName}</td>
                  <td>{e.price}</td>
                  <td>{e.cnt}</td>
                  <td>{e.price * e.cnt  }</td>
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