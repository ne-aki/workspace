import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink to={'/'} className={({isActive}) => isActive ? styles.active : undefined}>
            <p>홈</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/manage-car'} className={({isActive}) => isActive ? styles.active : undefined}>
            <p>차량관리</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={'reg-sales-info'} className={({isActive}) => isActive ? styles.active : undefined}>
            <p>판매정보등록</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={'sales-list'} className={({isActive}) => isActive ? styles.active : undefined}>
            <p>판매목록조회</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header