import React, { useState } from 'react'

const Test5복습 = () => {
  const [man, setMan] = useState({
    name : '김자바',
    age : 20,
    addr : '울산시'
  });
  console.log(man.name);
  

  return (
    <div>
      <h2>이름 : {man.name}</h2>
      <h2>나이 : {man.age}</h2>
      <h2>주소 : {man.addr}</h2>
      <button type="button" onClick={() => {
        const copyMan = {...man};
        copyMan.name = '홍길동';
        setMan(copyMan);
      }}>이름을 홍길동으로 변경</button>
      <button type="button" onClick={() => {
        const copyMan = {...man, age : 30}
        setMan(copyMan)
      }}>나이를 30으로 변경</button>
      <button type="button" onClick={() => {
        const copyMan = {...man, addr : '서울시'};
        setMan(copyMan)
      }}>주소를 서울시로 변경</button>
    </div>
  )
}
export default Test5복습