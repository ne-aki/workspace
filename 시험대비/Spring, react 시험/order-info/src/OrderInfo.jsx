import React, { use, useEffect, useState } from 'react'
import OrderList from './OrderList'
import OrderDetail from './OrderDetail'
import axios from 'axios';

const OrderInfo = () => {
  const[orderListInfo, setOrderListInfo] = useState([]);
  const[selectOrderList, setSelectOrderList] = useState({})
  const[isShowDetail, setIsShowDetail] = useState(false)
  useEffect(() => {
    axios.get('/api/rest-order-infos')
    .then((res) => {
      console.log(res.data);
      setOrderListInfo(res.data);
    })
    .then((error) => console.log(error))
  }, [])
  return (
    <>
      {/* ''는 문자열만 전달하기 때문에 성립이 되지 않음 <OrderList orderListInfo='orderListInfo' /> */}
      <OrderList
        orderListInfo={orderListInfo}
        setSelectOrderList={setSelectOrderList}
        setIsShowDetail={setIsShowDetail}
      />
      {isShowDetail
      ?
      <OrderDetail selectOrderList={selectOrderList} />
      :
      null
      }
      
    </>
  )
}

export default OrderInfo