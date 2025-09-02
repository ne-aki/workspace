import React, { useEffect, useState } from 'react'
import styles from './BuyList.module.css'
import PageTitle from '../common/PageTitle'
import axios from 'axios';

const BuyList = () => {
  //조회한 구매 목록 데이터를 저장할 state 변수
  const [buyList, setBuyList] = useState([]);

  //마운트하면 조회한 목록 데이터를 buyList 변수에 저장
  useEffect(() => {
    axios.get('/api/buys/buy-list-admin')
    .then(res => {
      console.log(res.data);
      setBuyList(res.data);
    })
    .catch(e => console.log(e));
  }, [])

  return (
    <div>
      <PageTitle title='구매 이력 조회' />
      <div></div>
      <div></div>
    </div>
  )
}

export default BuyList