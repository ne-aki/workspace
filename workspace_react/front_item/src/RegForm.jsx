import React, { useState } from 'react'
import styles from './RegForm.module.css'
import axios from 'axios'

const RegForm = ({nav}) => {
  const [regItem, setRegItem] = useState({
    itemCategory : '',
    itemName : '',
    itemPrice : '1000',
    itemStatus : '준비 중',
    itemIntro : ''
  })
  const handleRegItem = e => {
    setRegItem({
      ...regItem,
      [e.target.name] : e.target.value
    })
  }
  //console.log(regItem);

  const regBtn = () => {
    if(regItem.itemCategory === '' || regItem.itemName === '' || regItem.itemPrice === '') {
      alert('카테고리, 상품명, 상품 가격은 필수사항입니다.');
      return;
    }
    const confirmReg = confirm('등록하시겠습니까?');
    if(confirmReg) {
      axios.post('/api/items', regItem)
      .then(res => {
        alert('등록되었습니다.');
        nav('/');
      })
      .catch(e => console.log(e))
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <p>상품 카테고리</p>
        <select name="itemCategory" value={regItem.itemCategory} onChange={e => handleRegItem(e)}>
          <option value="">선택</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="액세서리">액세서리</option>
        </select>
      </div>
      <div>
        <p>상품명</p>
        <input
          type="text"
          name="itemName"
          value={regItem.itemName}
          onChange={e => handleRegItem(e)}
        />
      </div>
      <div>
        <p>상품 가격</p>
        <input
          type="number"
          max={999999999}
          min={100}
          step={100}
          readOnly={false}
          name="itemPrice"
          value={regItem.itemPrice}
          onChange={e => handleRegItem(e)}
        />
      </div>
      <div className={styles.status_div}>
        <p>상품 상태</p>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'준비 중'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '준비 중'}
          /> 준비 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'판매 중'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '판매 중'}
          /> 판매 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'매진'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '매진'}
          /> 매진
        </span>
      </div>
      <div>
        <p>상품 소개</p>
        <textarea
          name="itemIntro"
          rows="5"
          value={regItem.itemIntro}
          onChange={e => handleRegItem(e)}
        ></textarea>
      </div>
      <div className={styles.btn_div}>
        <button type="button" onClick={e => nav(-1)}>취소</button>
        <button
          type="button"
          onClick={e => regBtn()}
        >등록</button>
      </div>
    </div>
  )
}

export default RegForm