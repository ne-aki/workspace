import React, { useState } from 'react'

const InputTest4 = () => {

  const man = {
    name : 'kim',
    age : 20
  };
  console.log(man.name);
  console.log(man['name']);
  console.log(man.age);
  console.log(man['age'])
  const v = 'age';
  man.v; //man.v -> v라는 key에 대한 value값 가져오겠습니다.
  man[v]; //man['age']

  //input 태그에 입력한 모든 내용을 저장하기 위한 state 변수
  const [inputData, setInputData] = useState({
    name : '',
    age : '',
    addr : ''
  });
  console.log(inputData);
  
  //input 태그에 값을 입력할 때마다 실행시키는 함수(통상적으로 입력한 값 앞에 handle을 넣음)
  const handleInputData = (e) => {
    setInputData({
      ...inputData,
      // key 값에는 변수를 넣기 위해 대괄호를 넣는다.
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div>
      이름 <input
            type="text"
            name='name'
            value={inputData.name}
            onChange={e => setInputData(e)}
          /> <br />
      나이 <input
            type="text"
            name='age'
            value={inputData.age}
            onChange={e => handleInputData(e)}
          /> <br />
      주소 <input
            type="text"
            name='addr'
            value={inputData.addr}
            onChange={e => handleInputData(e)}
          /> <br />
    </div>
  )
}

export default InputTest4