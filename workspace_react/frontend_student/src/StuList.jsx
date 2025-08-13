import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StuList = () => {

  const [classList, setClassList] = useState([]);
  
  const [stuList, setStuList] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState([])

  //학급목록과 학생목록을 동시에 조회
  useEffect(() => {
    axios.all([axios.get('/api/classes'), axios.get('/api/students')])
    .then(axios.spread((res1, res2) => {
      console.log(res1.data);
      console.log(res2.data);
      setClassList(res1.data);
      setStuList(res2.data);
    }))
    .catch(e => console.log(e));
  }, []);

  //셀렉트 박스의 값이 바뀌면 학생 목록을 다시 조회하는 함수
  const getStuList = classNum => {
    //매개변수는 선택한 classNum이다.
    axios.get(`api/students/${classNum}`) //  /api/students/
    .then(res => {
      //console.log(res.data);
      setStuList(res.data);
    })
    .catch(e => console.log(e))
  }

  return (
    <div>
      <select onChange={e => getStuList(e.target.value)}>
        <option value={'0'}>전체</option>
        {
          classList.map((classInfo, i) => {
            return (
              <option value={classInfo.classNum} key={i}>{classInfo.className}</option>
            )
          })
        }
      </select>
      <table border={1} width='500'>
        <colgroup>
          <col width='25%' />
          <col width='25%' />
          <col width='25%' />
          <col width='25%' />
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td>학급명</td>
            <td>학생명</td>
            <td>나이</td>
          </tr>
        </thead>
        <tbody>
          {
            stuList.map((stuInfo, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{stuInfo.classDTO.className}</td>
                  <td>{stuInfo.stuName}</td>
                  <td>{stuInfo.stuAge}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StuList