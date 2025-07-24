import React, { useState } from 'react'

const Form1 = () => {
  const [info, setInfo] = useState({
    id : '',
    pw : '',
    hobby : '',
    gender : 'm',
    intro : ''
  })
  const handleInfo = e => {
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }
  console.log(info);
  
  return (
    <div>
      아이디 <input type="text" name="id" value={info.id} onChange={e => handleInfo(e)} /> <br />
      비밀번호 <input type="password" name="pw" value={info.pw} onChange={e => handleInfo(e)} /> <br />
      취미
      <select name="hobby" value={info.hobby} onChange={e => handleInfo(e)}>
        <option value="">선택하세요</option>
        <option value="1">운동</option>
        <option value="2">게임</option>
        <option value="3">코딩</option>
      </select>
      <br />
      성별
      <input type="radio" name="gender" value={'m'} checked={info.gender === 'm'} onChange={e => handleInfo(e)} /> 남
      <input type="radio" name="gender" value={'w'} checked={info.gender === 'w'} onChange={e => handleInfo(e)} /> 여
      <br />
      인사말 <textarea name="" cols={50} rows={10} value={info.intro} onChange={e => handleInfo(e)}></textarea>

    </div>
  )
}

export default Form1