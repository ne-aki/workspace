import React from 'react'
import UserHeader from './UserHeader'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import styles from './PersonalLayout.module.css'

const PersonalLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_div}>
        <UserHeader />
      </div>
      <div className={styles.main_div}>
        <div className={styles.side_div}>
          <SideMenu />
        </div>
        <div className={styles.content_div}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PersonalLayout