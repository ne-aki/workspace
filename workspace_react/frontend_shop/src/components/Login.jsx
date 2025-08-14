import React from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './login.module.css'

const Login = ({isOpenLogin, onClose}) => {
  return (
    <Modal
      isOpen={isOpenLogin}
      title='LOGIN'
      size='300px'
      onClose={onClose}
    >
      <div className={styles.login_div}>
        <div className={styles.login_input}>
          <Input
            size='100%'
            placeholder='Input your ID'
          />
          <span><i className="bi bi-person-fill"></i></span>
        </div>
        <div className={styles.login_input}>
          <Input
            size='100%'
            placeholder='Input your password'
            type='password'
          />
          <span><i className="bi bi-lock-fill"></i></span>
        </div>
        <Button
          size='100%'
          color='green'
          title='Sign In'
        />
      </div>
    </Modal>
  )
}

export default Login