import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <p className={styles.input_login}>
        <span><i className="bi bi-person-fill"></i></span>
        <input
          type="text"
          name=""
          placeholder='ID'
        />
      </p>
      <p className={styles.input_login}>
        <span><i className="bi bi-lock-fill"></i></span>
        <input
          type="password"
          name=""
          placeholder='Password'
        />
      </p>
      <p><button type="button">Sign In</button></p>
    </div>
  )
}

export default Login