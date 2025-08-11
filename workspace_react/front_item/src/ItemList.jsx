import React, { useEffect, useState } from 'react'
import styles from './ItemList.module.css'
import axios from 'axios';
import dayjs from 'dayjs';

const ItemList = ({nav}) => {
  const [itemInfo, setItemInfo] = useState([])
  useEffect(() => {
    axios.get('/api/items')
    .then(res => setItemInfo(res.data))
    .catch(e => console.log(e))
  }, []);

  let sumPrice = 0;
  for(const item of itemInfo) {
    sumPrice = sumPrice + item.itemPrice;
  }

  return (
    <div className={styles.container}>
      <table className={styles.list_table}>
        <thead>
          <tr>
            <td>No</td>
            <td>카테고리</td>
            <td>상품명</td>
            <td>가격</td>
            <td>상태</td>
            <td>등록일</td>
          </tr>
        </thead>
        <tbody>
          {
            itemInfo.length === 0
            ?
            <tr>
              <td colSpan={6}>조회된 정보가 없습니다.</td>
            </tr>
            :
            itemInfo.map((item, i) => {
              return(
                <tr key={i} onClick={e => nav(`/item-detail/${item.itemNum}`)}>
                  <td>{itemInfo.length - i}</td>
                  <td>{item.itemCategory}</td>
                  <td>{item.itemName}</td>
                  <td>{'￦' + item.itemPrice.toLocaleString()}</td>
                  <td>{item.itemStatus}</td>
                  <td>{dayjs(item.regDate).format('YYYY/MM/DD HH:mm:ss')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className={styles.sum_price}>
        <p>총 등록 가격</p>
        <p>{sumPrice.toLocaleString() + '원'}</p>
      </div>
      <div className={styles.btn_div}>
        <button type="button" onClick={e => nav('/reg-item')}>상품 등록</button>
      </div>
    </div>
  )
}

export default ItemList