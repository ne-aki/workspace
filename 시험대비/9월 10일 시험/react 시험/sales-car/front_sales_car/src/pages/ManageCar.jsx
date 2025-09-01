import React from 'react'
import styles from './ManageCar.module.css'

const ManageCar = () => {
  return (
    <div>
      <div className={styles.reg_car}>
        <h2>차량 등록</h2>
        <div className={styles.reg_info_div}>
          <div>
            <p>제조사</p>
            <select name="">
              <option value="">현대</option>
              <option value="">기아</option>
            </select>
          </div>
          <div>
            <p>모델명</p>
            <input type="text" name="" />
          </div>
          <div>
            <p>차량가격</p>
            <input type="text" name="" />
          </div>
        </div>
        <div>
          <button type="button">등 록</button>
        </div>
      </div>
      <div className={styles.car_list}></div>
    </div>
  )
}

export default ManageCar