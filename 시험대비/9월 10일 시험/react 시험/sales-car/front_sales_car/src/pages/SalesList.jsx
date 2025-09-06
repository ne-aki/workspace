import React, { useEffect, useState } from 'react'
import styles from './SalesList.module.css'
import axios from 'axios';
import dayjs from 'dayjs';
import Table from '../common/Table';
import PageTitles from '../common/PageTitles';

const SalesList = () => {
  //판매 목록을 저장할 state 변수
  const [salesList, setSalesList] = useState([]);

  //판매목록 조회
  useEffect(() => {
    axios.get('/api/sales-cars')
    .then(res => {
      //console.log(res.data);
      setSalesList(res.data);
    })
    .catch(e => console.log(e))
  }, []);

  //console.log(salesList);

  return (
    <div>
      <PageTitles title={'판매목록조회'} />
      <Table>
        <thead>
          <tr>
            <td rowSpan={2}>No</td>
            <td colSpan={4}>구매자 정보</td>
            <td colSpan={2}>차량정보</td>
          </tr>
          <tr>
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>가격</td>
          </tr>
        </thead>
        <tbody>
          {
            salesList.map((salesInfo, i) => {
              return (
                <tr key={i}>
                  <td>{salesList.length - i}</td>
                  <td>{salesInfo.buyerName}</td>
                  <td>{salesInfo.buyerTel}</td>
                  <td>{dayjs(salesInfo.saleDate).format('YYYY.MM.DD HH:mm')}</td>
                  <td>{salesInfo.color}</td>
                  <td>{salesInfo.carDTO.modelName}</td>
                  <td>{salesInfo.carDTO.price.toLocaleString() + '원'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default SalesList