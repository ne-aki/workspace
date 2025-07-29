import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './memberList.css'

const MemberList = () => {
  //조회된 모든 회원의 아이디, 이름, 나이를 표 생성으로 표현!
  const [MemberInfo, setMemberInfo] = useState([]);
  useEffect(() => {
    axios.get('/api/members')
    .then(res => {
      console.log(res.data);
      setMemberInfo(res.data);
    })
    .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <h3>회원 목록</h3>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>이름</td>
            <td>나이</td>
          </tr>
        </thead>
        <tbody>
          {
            MemberInfo.map((member, i) => {
              return(
                <tr key={i}>
                  <td>{member.memId}</td>
                  <td>{member.memName}</td>
                  <td>{member.memAge}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MemberList