import React, { useState } from 'react'
import styles from './Join.module.css'
import axios from 'axios'

const Join = () => {
  const [member, setMember] = useState({
    id : '',
    pw : '',
    nickname : '',
    email : '',
    birthday : {
      years : '',
      months : '',
      days : ''
    },
    height : '',
    weight : '',
    gender : '',
    tel : '',
    nationality : '',
  })

  const handleMember = e => {
    setMember({
      ...member,
      [e.target.name] : e.target.value
    })
  }
  
  const joinBtn = () => {
    axios.post('/members', member)
    .then(res => {})
    .catch(error => console.log(error));
  }

  const years = [];
  const months = [];
  const days = [];

  for(let i = 1901; i < 2020; i++) {
    years.push(i);
  }

  for(let i = 1; i < 13; i++) {
    months.push(i);
  }

  for(let i = 1; i < 32; i++) {
    days.push(i);
  }

  console.log(member);
  //console.log(years);
  

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>회원가입</h1>
      </div>
      <div className={styles.join_div}>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  name="id"
                  value={member.id}
                  onChange={e => handleMember(e)}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  name="pw"
                  value={member.pw}
                  onChange={e => handleMember(e)}
                />
              </td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td>
                <input
                  type="text"
                  name="nickname"
                  value={member.nickname}
                  onChange={e => handleMember(e)}
                />
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={member.email}
                  onChange={e => handleMember(e)}
                />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <select name="birthday" value={member.birthday.years} onChange={e => handleMember(e)}>
                  <option value="">년</option>
                  {
                    years.map((year, i) => {
                      return(
                        <option value={year} key={i}>{year}년</option>
                      )
                    })
                  }
                </select>
                <select name="birthday" value={member.birthday.months} onChange={e => handleMember(e)}></select>
              </td>
            </tr>
            <tr>
              <td>신장</td>
              <td>
                <input
                  type="text"
                  name="height"
                  value={member.height}
                  onChange={e => handleMember(e)}
                />
              </td>
            </tr>
            <tr>
              <td>몸무게</td>
              <td></td>
            </tr>
            <tr>
              <td>성별</td>
              <td></td>
            </tr>
            <tr>
              <td>연락처</td>
              <td></td>
            </tr>
            <tr>
              <td>국적</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Join