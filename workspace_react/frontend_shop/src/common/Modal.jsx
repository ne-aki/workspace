import React, { Children } from 'react'
import styles from './Modal.module.css'

//props로 전달받지 않아도 default값을 줄 수 있음 props로 받으면 받은 값을 적용
//props
// 1. size => 모달의 크기 지정
// 2. title => 모달의 제목 지정
// 3. children => 모달의 내용부
const Modal = ({
  size = '500px',
  title = '',
  isOpen = false,
  onClose,
  children
}) => {

  //isOpen이 false면 모달을 닫는다.
  if(!isOpen) return null

  return (
    <div className={styles.modal_overlay}>
      <div
        className={styles.modal_content}
        style={{width:size}}
        //여기에는 변수를 써서 디자인할 수 있음,App에서 props로 받아올 수 있음
      >
        <div className={styles.modal_title}>
          <button
            type="button"
            className={styles.close_btn}
            onClick={onClose}
          >
            <i className="bi bi-x"></i>
          </button>
          <p>{title}</p>
        </div>
        <div className={styles.content_div}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal