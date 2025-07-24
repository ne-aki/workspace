import React, { useState } from 'react'

const Select2 = () => {
  const [infos, setInfos] = useState({
    name : "",
    age : "",
    grade : 1
  })
  const handleInfos = e => {
    setInfos({
      ...infos,
      [e.target.name] : e.target.value
    })
  }
  console.log(infos);
  
  //내용을 입력할 때마다 입력한 데이터를 저장하시오!!
  return (
    <div>
      이름 <input type="text" value={infos.name} name='name' onChange={e => handleInfos(e)} /> <br />
      나이 <input type="text" value={infos.age} name='age' onChange={e => handleInfos(e)} /> <br />
      학년
      <select value={infos.grade} name='grade' onChange={e => handleInfos(e)}>
        <option value="1">1학년</option>
        <option value="2">2학년</option>
        <option value="3">3학년</option>
        <option value="4">4학년</option>
      </select>
    </div>
  )
}

export default Select2