import React, { useState } from 'react'
import './Test4.css'

const Test4배열 = () => { //[0, 0, 0]
  const [cnts, setCnts] = useState([0, 0, 0])
  //숫자 클릭 시 실행되는 함수
  function changeNum(index) {
    const copyCnts = [...cnts];
    copyCnts[index] = copyCnts[index] + 1;
    setCnts(copyCnts);
  }
  return (
    <div className='Test4_container'>
      <div onClick={() => changeNum(0)}>{cnts[0]}</div>
      <div onClick={() => changeNum(1)}>{cnts[1]}</div>
      <div onClick={() => changeNum(2)}>{cnts[2]}</div>
    </div>
  )
}

export default Test4배열