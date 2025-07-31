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
      month : '',
      day : ''
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

  const years = []

  for(let i = 1900; i < 2020; i++) {
    years.push(i)
  }

  console.log(member);
  console.log(years);
  

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
                <select name="birthday" value=''>
                  {
                    years.map((e, i) => {
                      return(
                        <option value={e} key={i}>{e}년</option>
                      )
                    })
                  }
                </select>
              </td>
            </tr>
            <tr>
              <td>신장</td>
              <td></td>
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