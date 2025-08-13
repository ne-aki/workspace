import React from 'react'
import styles from './UserHeader.module.css'

const UserHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_div}>
        <span>LOGIN</span>
        <span>JOIN</span>
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
    </div>
  )
}

export default UserHeader