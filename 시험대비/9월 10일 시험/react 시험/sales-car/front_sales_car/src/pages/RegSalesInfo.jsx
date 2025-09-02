import React from 'react'
import styles from './RegSalesInfo.module.css'

const RegSalesInfo = () => {
  return (
    <div>
      <p>
        <span>구매자명</span>
        <input type="text" name="" />
      </p>
      <div className={styles.color_and_model}>
        <p>
          <span>색상</span>
          <select name="">
            <option value="">선택</option>
            <option value="">화이트</option>
            <option value="">블랙</option>
            <option value="">레드</option>
          </select>
        </p>
        <p>
          <span>모델</span>
          <select name="">
            <option value="">선택</option>
          </select>
        </p>
      </div>
      <p>
        <span>연락처</span>
        <input type="text" />
      </p>
      <p>
        <button type="button">등 록</button>
      </p>
    </div>
  )
}

export default RegSalesInfo