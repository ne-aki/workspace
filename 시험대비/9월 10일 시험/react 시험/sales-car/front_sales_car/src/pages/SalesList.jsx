import React, { useEffect, useState } from 'react'
import styles from './SalesList.module.css'
import axios from 'axios';

const SalesList = () => {
  //판매 목록을 저장할 state 변수
  const [salesList, setSalesList] = useState([]);

  //판매목록 조회
  useEffect(() => {
    axios.get('/api/sales-cars')
    .then(res => {
      console.log(res.data);
      setSalesList(res.data);
    })
    .catch(e => console.log(e))
  }, []);

  console.log(salesList)

  return (
    <div>판매 목록</div>
  )
}

export default SalesList