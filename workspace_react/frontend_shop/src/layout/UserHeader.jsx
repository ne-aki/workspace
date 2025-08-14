import React, { useState } from 'react'
import styles from './UserHeader.module.css'
import Login from '../components/Login'
import Join from '../components/Join';

const UserHeader = () => {
  //로그인 모달창 숨김/보이기 여부
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenJoin, setIsOpenJoin] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.login_div}>
        <span onClick={() => setIsOpenLogin(true)}>LOGIN</span>
        <span onClick={() => setIsOpenJoin(true)}>JOIN</span>
      </div>
      <div className={styles.banner_div}>
        <img
          src="./book_banner.PNG"
          className={styles.banner_img}
        />
        <p>Book Store</p>
      </div>
      <div className={styles.menu_div}>
        메뉴자리
      </div>
      {/* 로그인 모달 컴포넌트 */}
      <Login
        isOpenLogin={isOpenLogin}
        onClose={() => setIsOpenLogin(false)}
      />
      <Join
        isOpenJoin = {isOpenJoin}
        onClose = {() => setIsOpenJoin(false)}
      />
    </div>
  )
}

export default UserHeader