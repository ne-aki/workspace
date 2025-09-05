import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styles from './SalesCarLayout.module.css'

const SalesCarLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SalesCarLayout