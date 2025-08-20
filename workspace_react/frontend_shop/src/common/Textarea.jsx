import React from 'react'
import styles from './Textarea.module.css'

const Textarea = ({size='100px',height='60px',...props}) => {
  return (
    <textarea
      className={styles.textarea}
      {...props}
      style={{
        width : size,
        height : height
      }}
    ></textarea>
  )
}

export default Textarea