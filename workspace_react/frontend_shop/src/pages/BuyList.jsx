import React, { useEffect, useState } from 'react'
import styles from './BuyList.module.css'
import PageTitle from '../common/PageTitle'
import axios from 'axios';
import Button from '../common/Button'
import Input from '../common/Input'
import dayjs from 'dayjs';

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
    <div className={styles.container}>
      <PageTitle title='구매 이력 조회' />
      <div className={styles.search_list}>
        <div>
          <span>주문번호</span>
          <Input size='180px' />
        </div>
        <div>
          <span>구매자ID</span>
          <Input size='180px' />
        </div>
        <div>
          <span>구매일시</span>
          <Input type='date' />
          <span>-</span>
          <Input type={'date'} />
        </div>
        <div>
          <Button title='검색' />
        </div>
      </div>
      <div className={styles.buy_list}>
        <p>총 x건이 검색되었습니다.</p>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>주문번호</td>
              <td>구매상품</td>
              <td>구매자ID</td>
              <td>결제금액</td>
              <td>구매일시</td>
            </tr>
          </thead>
          <tbody>
            {
              buyList.map((e, i) => {
                return(
                  <tr key={i}>
                    <td>{buyList.length - i}</td>
                    <td>{e.orderNum}</td>
                    <td>{e.title}</td>
                    <td>{e.memId}</td>
                    <td>{e.price.toLocaleString() + '원'}</td>
                    <td>{dayjs(e.buyDate).format('YYYY.MM.DD HH:mm')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BuyList