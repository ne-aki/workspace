import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({isOpenLogin, onClose}) => {
  const nav = useNavigate();
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  })

  const [isAbleLogin, setIsAbleLogin] = useState(false);

  const handleLoginData = e => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  const loginBtn = () => {
    //받는 데이터가 두개 이상일 때 두번째 매개변수에는 {params : {key값1 : 객체명1, key값2 : 객체명2}} 이런식으로 객체를 넣는다.
    axios.get('/api/members/login', {params : loginData})
    .then(res => {
      console.log(res.data.memRole);
      setLoginData({
        memId : '',
        memPw : ''
      })
      if(res.data) {
        alert('로그인 가능');
        if(res.data.memRole === 'ADMIN') {
          nav('/admin/reg-book');
        } else {
          //모달 안 inpu 태그를 초기화
          setLoginData({
            memId : '',
            memPw : ''
          });
          //모달 닫기
          onClose();
          nav('/');
        }
      } else {
        alert('로그인 불가능');
      }
      
    })
    .catch(e => console.log(e))
  }

  return (
    <Modal
      isOpen={isOpenLogin}
      title='LOGIN'
      size='300px'
      onClose={
        () => {
          onClose();
          setLoginData({
            memId : '',
            memPw : ''
          });
        }
      }
    >
      <div className={styles.login_div}>
        <div className={styles.login_input}>
          <Input
            size='100%'
            placeholder='Input your ID'
            name='memId'
            value={loginData.memId}
            onChange={e => handleLoginData(e)}
            onKeyDown={e => {
              if(e.key === 'Enter') {
                loginBtn();
              }
            }}
            
          />
          <span><i className="bi bi-person-fill"></i></span>
        </div>
        <div className={styles.login_input}>
          <Input
            size='100%'
            placeholder='Input your password'
            type='password'
            name='memPw'
            value={loginData.memPw}
            onChange={e => handleLoginData(e)}
            onKeyDown={e => {
              if(e.key === 'Enter') {
                loginBtn();
              }
            }}
          />
          <span><i className="bi bi-lock-fill"></i></span>
        </div>
        <Button
          size='100%'
          color='green'
          title='Login'
          onClick={e => loginBtn()}
        />
      </div>
    </Modal>
  )
}

export default Login