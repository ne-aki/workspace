import axios from 'axios'
import React, { useState } from 'react'

const InputTest3 = () => {
  //이름, 국어점수, 영어점수, 주소 등 4개의 데이터를 입력받을 수 있는 input 태그 4개 생성.
  //이 때, 이름과 주소의 초기값은 빈 문자열로 지정하고, 국어, 영어 점수의 초기값은 0
  //1. jsx에서 input 태그에 입력받은 4개의 데이터를 spring으로 전달하고, Spring에서는 전달받은 데이터를 출력하면 됩니다.
  //controller 클래스는 새로 만들 필요 없음.
  //전달되는 4개의 데이터를 받기 위해 필요한 코드는 알아서 작성
  const [student, setStudent] = useState({
    name : '',
    korScore : 0,
    engScore : 0,
    address : ''
  })
  //등록번튼 클릭 시 실행 함수
  const regStudent = () => {
    axios.post('/api/students', student)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }
  console.log(student);
  
  return (
    <div>
      이름 : <input type="text" value={student.name} onChange={e => {
        setStudent({
          ...student,
          name : e.target.value
        })
      }} /> <br />
      국어점수 : <input type="text" value={student.korScore} onChange={e => setStudent({
        ...student,
        korScore : e.target.value
      })} /> <br />
      영어점수 : <input type="text" value={student.engScore} onChange={e => setStudent({
        ...student,
        engScore : e.target.value
      })} /> <br />
      주소 : <input type="text" value={student.address} onChange={e => setStudent({
        ...student,
        address : e.target.value
      })} /> <br />
      <button type="button" onClick={e => regStudent()}>학생 등록</button>
    </div>
  )
}

export default InputTest3