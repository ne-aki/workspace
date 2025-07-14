import React, { use, useState } from 'react'
//현재 폴더(.)를 기준으로 Test.css파일을 찾겠다.
import './Test1.css'

const Test1 = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div className='test1_container'>
      <div>{cnt}</div>
      <button type="button" onClick={() => {
        setCnt(cnt + 1)
      }}>클릭</button>
    </div>
  )
}

export default Test1