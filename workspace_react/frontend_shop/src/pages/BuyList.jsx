import React, { useEffect, useState } from 'react'
import styles from './BuyList.module.css'
import PageTitle from '../common/PageTitle'
import axios from 'axios';
import Button from '../common/Button'
import Input from '../common/Input'
import dayjs from 'dayjs';
import BuyListModal from './BuyListModal';

const BuyList = () => {
  //구매 상세 내역 모달의 보이기 여부를 저장할 변수
  const [isOpen, setIsOpen] = useState(false);

  //조회한 구매 목록 데이터를 저장할 state 변수
  const [buyList, setBuyList] = useState([]);

  //조회한 구매 상세 정보를 저장할 state 변수
  const [detailList, setDetailList] = useState([]);

  //마운트하면 조회한 목록 데이터를 buyList 변수에 저장
  useEffect(() => {
    axios.get('/api/buys/buy-list-admin')
    .then(res => {
      console.log(res.data);
      setBuyList(res.data);
    })
    .catch(e => console.log(e));
  }, []);

  //행을 클릭하면 모달이 열리는 함수
  const getDetail = (orderNum) => {
    axios.get(`/api/buys/${orderNum}`)
    .then(res => {
      console.log(res.data);
      //클릭한 행의 상세 내역 조회
      setDetailList(res.data);

      //모달을 보이게 변경
      setIsOpen(true);
    })
    .catch(e => console.log(e))
  }

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
              buyList.map((buyInfo, i) => {
                return(
                  <tr key={i} onClick={e => getDetail(buyInfo.orderNum)}>
                    <td>{buyList.length - i}</td>
                    <td>{buyInfo.orderNum}</td>
                    <td>{buyInfo.title}</td>
                    <td>{buyInfo.memId}</td>
                    <td>{buyInfo.price.toLocaleString() + '원'}</td>
                    <td>{dayjs(buyInfo.buyDate).format('YYYY.MM.DD HH:mm')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {/* 구매 상세 내용 모달 */}
      <BuyListModal
        detailList={detailList}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default BuyList