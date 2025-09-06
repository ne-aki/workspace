import React from 'react'
import styles from './Table.module.css'

const Table = ({children, size='100%'}) => {
  return (
    <table
      className={styles.common_table}
      width={size}
    >
      {children}
    </table>
  )
}

export default Table