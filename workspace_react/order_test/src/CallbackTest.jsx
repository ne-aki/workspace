import React from 'react'

const CallbackTest = () => {

  const test = (a, b) => alert(a + b);

  // const ccc = () => {
  //   alert(11);
  //   return 10;
  // }

  // const d = ccc(); //ccc()함수 실행 후 10을 d에 리턴한다.
  // const d1 = ccc; //함수의 참조값을 d1에 저장
  // d1();

  return (
    <div>
      {/* 함수의 참조값을 onClick에 저장 */}
      <button type="button" onClick={() => test(10, 20)}>버튼1</button>
      <button type="button" onClick={test}>버튼2</button>
      {/* test()함수의 실행 후 리턴값이 onClick에 저장 */}
      {/* <button type="button" onClick={test()}>버튼3</button> */}
    </div>
  )
}

export default CallbackTest