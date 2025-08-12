import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StuList = () => {

  const [classList, setClassList] = useState([]);
  
  const [stuList, setStuList] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState([])

  useEffect(() => {
    axios.get('/api/classes')
    .then(res => setClassList(res.data))
    .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    axios.get('/api/students')
    .then(res => setStuList(res.data))
    .catch(e => console.log(e));
  }, []);

  // const handleSelectedStudent = e => {
  //   axios.get(`api/students/${e.target.value}`)
  // }
  
  console.log(classList);

  return (
    <div>
      <select name="className" value={0} onChange={e => {}}>
        <option value="">전체</option>
        {
          classList.map((classInfo, i) => {
            return (
              <option value={classInfo.classNum} key={i}>{classInfo.className}</option>
            )
          })
        }
      </select>
      <table>
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
                  <td></td>
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