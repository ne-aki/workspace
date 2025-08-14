import React from 'react'
import styles from './Button.module.css'

const Button = ({title='버튼', size='80px', color='blue', onClick}) => {
  return (
    <button
      type='button'
      className={`${styles.btn} ${styles[color]}`}
      style={{width : size}}
      onClick={onClick}
    >{title}</button>
  )
}

export default Button