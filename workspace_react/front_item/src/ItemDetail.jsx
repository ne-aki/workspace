import React, { useEffect, useState } from 'react'
import styles from './ItemDetail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ItemDetail = ({nav}) => {
  const {itemNum} = useParams();
  const [itemInfo, setItemInfo] = useState({})
  useEffect(() => {
    axios.get(`/api/items/${itemNum}`)
    .then(res => setItemInfo(res.data))
    .catch(e => console.log(e));
  }, [])
  const deleteBtn = () => {
    const deleteConfirm = confirm('정말 삭제하시겠습니까?');
      if(deleteConfirm) {
         axios.delete(`/api/items/${itemNum}`)
        .then(res => {
          alert('삭제되었습니다.');
          nav('/');
        })
        .catch(e => console.log(e))
      }
  }
  return (
    <div className={styles.container}>
      <table className={styles.detail_table}>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>{itemInfo.itemNum}</td>
            <td>카테고리</td>
            <td>{itemInfo.itemCategory}</td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>{itemInfo.itemName}</td>
            <td>가격</td>
            <td>{itemInfo.itemPrice}</td>
          </tr>
          <tr>
            <td>상태</td>
            <td>{itemInfo.itemStatus}</td>
            <td>등록일</td>
            <td>{itemInfo.regDate}</td>
          </tr>
          <tr>
            <td>상품 소개</td>
            <td colSpan={3}>{itemInfo.itemIntro}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btn_div}>
        <button type="button" onClick={e => nav('/')}>목록가기</button>
        <button type="button" onClick={e => nav(`/update-item/${itemNum}`)}>수정</button>
        <button type="button" onClick={e => deleteBtn()}>삭제</button>
      </div>
    </div>
  )
}

export default ItemDetail