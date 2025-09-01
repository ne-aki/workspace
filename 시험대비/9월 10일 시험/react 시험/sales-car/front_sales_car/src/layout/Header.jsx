import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li onClick={e => nav('/')}>홈</li>
        <li onClick={e => nav('/manage-car')}>차량관리</li>
        <li onClick={e => nav('/reg-sales-info')}>판매정보등록</li>
        <li onClick={e => nav('/sales-list')}>판매목록조회</li>
      </ul>
    </div>
  )
}

export default Header