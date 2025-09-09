import React from 'react'
import styles from './AdminHome.module.css'

const AdminHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_row}>
        <div className="">오늘의 매출</div>
        <div className="">전체 매출</div>
        <div className="">오늘의 방문자 수</div>
        <div className="">이번달 방문자 수</div>
      </div>
      <div className={styles.second_row}>
        최근 10일간 매출 차트(꺾은선 그래프)
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}

export default AdminHome