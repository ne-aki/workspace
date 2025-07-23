import React, { use, useEffect, useState } from 'react'
import OrderList from './OrderList'
import OrderDetail from './OrderDetail'
import axios from 'axios';
import Registration from './Registration';

const OrderInfo = () => {
  const[orderListInfo, setOrderListInfo] = useState([]);
  const[selectOrderList, setSelectOrderList] = useState({})
  const[isShowDetail, setIsShowDetail] = useState(false)
  const[isShowReg, setIsShowReg] = useState(false)
  const[regOrder, setRegOrder] = useState({
    itemNum : '',
    itemName : '',
    price : 0,
    cnt : 1,
    id : ''
  })
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
        setIsShowReg={setIsShowReg}
      />
      
      {isShowReg
      ?
      <>
        <Registration
          regOrder={regOrder}
          setRegOrder={setRegOrder}
          setOrderListInfo={setOrderListInfo}
          orderListInfo={orderListInfo}
          setIsShowReg={setIsShowReg}
        />
      </>
      :
      null
      }

      {isShowDetail
      ?
      <>
        <OrderDetail
          selectOrderList={selectOrderList}
          setIsShowDetail={setIsShowDetail}
          setOrderListInfo={setOrderListInfo}
          orderListInfo={orderListInfo}
        />
      </>
      :
      null
      }
    </>
  )
}

export default OrderInfo