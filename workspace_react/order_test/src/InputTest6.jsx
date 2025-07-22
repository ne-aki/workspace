import axios from 'axios';
import React, { useState } from 'react'
import './InputTest6.css'

const InputTest6 = () => {
  const [info, setInfo] = useState({
    id : '',
    pw : '',
    mail : '',
    name : '',
    resRegNum : '',
    birthday : '',
    address : '',
    introducing : ''
  });

  const handleInfo = e => {
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    });
  }

  const join = () => {
    axios.post('/api/infos', info)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className='test6-container'>
      <table className='test6-table'>
        <thead>
          <tr>
            <td colSpan={2}>회원 기본 정보</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>* 아이디:</td>
            <td>
              <input
                type="text"
                name="id"
                value={info.id}
                onChange={e => handleInfo(e)}
                placeholder='4~12자의 영문 대소문자,숫자만 입력'
              />
              <button>아이디 검사</button>
            </td>
          </tr>
          <tr>
            <td>* 비밀번호:</td>
            <td>
              <input
                type="password"
                name="pw"
                value={info.pw}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
          <tr>
            <td>* 메일주소:</td>
            <td>
              <input
                type="text"
                name="mail"
                value={info.mail}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
          <tr>
            <td>* 이름:</td>
            <td>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td colSpan={2}>개인 신상 정보</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>* 주민등록번호:</td>
            <td>
              <input
                type="text"
                name="resRegNum"
                value={info.resRegNum}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
          <tr>
            <td>생일:</td>
            <td>
              <input
                type="text"
                name="birthday"
                value={info.birthday}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
          <tr>
            <td>주소:</td>
            <td>
              <input
                type="text"
                name="address"
                value={info.address}
                onChange={e => handleInfo(e)}
              />
            </td>
          </tr>
          <tr>
            <td>자기소개:</td>
            <td>
              <textarea
                type="text"
                name="introducing"
                value={info.introducing}
                onChange={e => handleInfo(e)}
                cols={100}
                rows={10}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={e => join()}>회원가입</button>
      <button type="button">다시입력</button>
    </div>
  )
}

export default InputTest6