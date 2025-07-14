import React from 'react'

const EventTest = () => {
  function f1() {
    alert('버튼 클릭')
  }
  return (
    <>
      <div>EventTest</div>
      {/* jsx에서는 속성값도 중괄호 안에 변수를 넣을 수 있다. */}
      <button type='button' onClick={() => {
        alert(1);
      }}>버튼1</button><br />
      
      <input type="text" onChange={() => {
        console.log(2);
      }} /> <br />
      <div onMouseEnter={() => alert(3)}>div 태그</div>
      <button type="button" onClick={() => f1()}>버튼2</button>
    </>
  )
}

export default EventTest