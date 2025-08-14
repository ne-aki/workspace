import React from 'react'
import styles from './Select.module.css'

const Select = ({size='120px', children, ...props}) => {
  return (
    <select
      {...props}
      style={{width:size}}
      className={styles.select}
    >
      {children}
    </select>
  )
}

export default Select