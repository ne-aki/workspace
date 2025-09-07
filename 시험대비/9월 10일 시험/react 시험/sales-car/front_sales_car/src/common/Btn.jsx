import React from 'react'
import styles from './Btn.module.css'

const Btn = ({BtnName = '등 록', size='100px', ...props}) => {
  return (
    <button
      className={`${styles.common_btn} ${props.disabled && styles.disabled}`}
      type='button'
      style={{width : size}}
      {...props}
    >{BtnName}</button>
  )
}

export default Btn