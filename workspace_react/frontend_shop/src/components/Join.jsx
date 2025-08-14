import React, { useState } from 'react'
import styles from './Join.module.css'
import Input from '../common/Input'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Select from '../common/Select'

const Join = ({isOpenJoin, onClose}) => {
  const [regMember, setRegMember] = useState({
    memId : '',
    memPw : '',
    confirmPw : '',
    memName : '',
    memTel : {
      first : '',
      second : '',
      third : ''
    },
    memEmail : {
      mailId : '',
      mailDomain : ''
    },
    memAddr : '',
    addrDetail : ''
  });

  const handleRegMember = e => {
    setRegMember({
      ...regMember,
      [e.target.name] : e.target.value
    })
  }

  console.log(regMember);

  return (
    <Modal
      isOpen={isOpenJoin}
      title='JOIN'
      size='400px'
      onClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.flex_div}>
          <p>아이디</p>
          <div>
            <Input
              size='100%'
              name='memId'
              value={regMember.memId}
              onChange={e => handleRegMember(e)}
            />
            <Button
              size='50%'
              title='중 복 확 인'
              color='green'
            />
          </div>
        </div>
        <div className="">
          <p>비밀번호</p>
          <Input
            size='100%'
            type='password'
            name='memPw'
            value={regMember.memPw}
            onChange={e => handleRegMember(e)}
          />
        </div>
        <div className="">
          <p>비밀번호 확인</p>
          <Input
            size='100%'
            type='password'
            name='confirmPw'
            value={regMember.confirmPw}
            onChange={e => handleRegMember(e)}
          />
        </div>
        <div className="">
          <p>회원명</p>
          <Input
            size='100%'
            name='memName'
            value={regMember.memName}
            onChange={e => handleRegMember(e)}
          />
        </div>
        <div className={styles.flex_div}>
          <p>연락처</p>
          <div>
            <Input
              size='100%'
            />
            <span>-</span>
            <Input
              size='100%'
            />
            <span>-</span>
            <Input
              size='100%'
            />
          </div>
        </div>
        <div className={styles.flex_div}>
          <p>이메일</p>
          <div>
            <Input
              size='100%'
            />
            <span>@</span>
            <Select size='80%'>
              <option value="">전체</option>
              <option value="">gmail.com</option>
              <option value="">naver.com</option>
            </Select>
          </div>
        </div>
        <div className={styles.flex_div}>
          <p>주소</p>
          <div>
            <Input
              size='100%'
            />
            <Button
              size='50%'
              title='검 색'
              color='green'
            />
          </div>
          <p>
            <Input
              size='100%'
            />
          </p>
        </div>
        <Button
          title='회 원 가 입'
          size='100%'
          color='green'
        />
      </div>
    </Modal>
  )
}

export default Join