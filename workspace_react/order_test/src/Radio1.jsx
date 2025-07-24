import React, { useState } from 'react'

//라디오는 선택한 태그의 value값이 저장된다.
//라디오 값을 저장할 state 변수의 초기값은 최소로 선택할 태그의 value값으로 지정
const Radio1 = () => {
  //라디오에서 선택한 값을 저장할 state 변수
  const [grade, setGrade] = useState('B');
  console.log(grade);
  
  return (
    <div>
      {/* 속성명과 속성값이 같으면 속성명만 쓰면 됨 */}
      <p>개발은 즐겁다?</p>
      {/* checked 속성은 state === value값으로 넣어야 함 */}
      <input type="radio" name="grade" value={'A'} checked={grade === 'A'} onChange={e => setGrade(e.target.value)} /> 상 <br />
      <input type="radio" name="grade" value='B' checked={grade === 'B'} onChange={e => setGrade(e.target.value)} /> 중 <br />
      <input type="radio" name="grade" value="C" checked={grade === 'C'} onChange={e => setGrade(e.target.value)} /> 하 <br />
    </div>
  )
}

export default Radio1