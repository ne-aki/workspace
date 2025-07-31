import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({nav}) => {
  return (
    <div className={styles.container}>
      <h1>연습용 사이트입니다.</h1>
      <div className={styles.login_div}>
        <p onClick={e => nav('/join')}>회원가입</p>
        <p onClick={e => nav('/login')}>로그인</p>
      </div>
    </div>
  )
}

export default Header