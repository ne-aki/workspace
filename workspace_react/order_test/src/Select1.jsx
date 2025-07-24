import React, { useState } from 'react'

//select의 데이터를 가져온다는 것은 선택한 요소의 value 값을 가져온다.
//select 태그의 value와 동일한 value를 지닌 option이 화면에 나타난다.
//select에서 선택한 데이터를 저장하기 위해 만든 state 변수의 초기값은 화면에 먼저 표현하고자 하는 option 태그의 value값으로 지정한다.
const Select1 = () => {
  //select에서 선택한 값을 저장할 state 변수
  const [fruit, setFruit] = useState('');
  console.log(fruit);
  
  return (
    <div>
      <select value={fruit} onChange={e => {
        setFruit(e.target.value);
      }}>
        {/* 통상적으로 value에는 primary key가 들어온다.
        눈에 보이는 값을 가져오는 것이 아닌 value값을 가져온다. */}
        <option value="">과일선택</option>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="orange">오렌지</option>
      </select>
    </div>
  )
}

export default Select1