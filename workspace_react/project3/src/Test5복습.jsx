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
        man.name = '홍길동';
        setMan(man);
      }}>이름을 홍길동으로 변경</button>
      <button type="button">나이를 30으로 변경</button>
      <button type="button">주소를 서울시로 변경</button>
    </div>
  )
}

export default Test5복습