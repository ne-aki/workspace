import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './StuList.css'

const StuList = () => {
  const[stuList, getStuList] = useState([]);

  useEffect(() => {
    axios.get('api/stuList')
    .then((res) => getStuList(res.data))
    .catch((error) => console.log(error))
  }, [])
  return (
    <div className='container'>
      <table>
        {/* colgroup태그는 열 너비 지정, width속성값에 *을 넣으면 나머지 %가 알아서 지정됨 */}
        <colgroup>
          <col width="*" />
          <col width="22%" />
          <col width="22%" />
          <col width="22%" />
          <col width="22%" />
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td>이름</td>
            <td>국어점수</td>
            <td>영어점수</td>
            <td>총점</td>
          </tr>
        </thead>
        <tbody>
          {
            stuList.map((student, i) => {
              return(
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.korScore}</td>
                  <td>{student.engScore}</td>
                  <td>{student.korScore + student.engScore}</td>
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