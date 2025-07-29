import axios from 'axios';
import React, { useState } from 'react'

const MemberRegForm = () => {
  const[regMember, setRegMember] = useState({
    memId : '',
    memPw : '',
    confirmPw : '',
    memName : '',
    memAge : '',
    //birthday : ''
  });
  const handleRegMember = e => {
    setRegMember({
      ...regMember,
      [e.target.name] : e.target.value
    });
  };
  const regBtn = e => {
    if(regMember.memPw !== regMember.confirmPw) {
      alert('비밀번호를 확인하세요');
      return;
    }
    axios.post('/api/members', regMember)
    .then(res => {
      console.log('등록 성공!')
      alert('가입되었습니다.');
    })
    .catch(error => console.log(error));
  };
  console.log(regMember);
  return (
    <div>
      <h1>회원등록</h1>
      아이디 <input type="text" name="memId" value={regMember.memId} onChange={e => handleRegMember(e)} /> <br />
      비밀번호 <input type="password" name="memPw" value={regMember.memPw} onChange={e => handleRegMember(e)} /> <br />
      비밀번호 확인 <input type="password" name='confirmPw' value={regMember.confirmPw} onChange={e => handleRegMember(e)} /> <br />
      이름 <input type="text" name="memName" value={regMember.memName} onChange={e => handleRegMember(e)} /> <br />
      나이 <input type="number" name="memAge" value={regMember.memAge} onChange={e => handleRegMember(e)} /> <br />
      <button type="button" onClick={e => regBtn(e)}>회원가입</button>
    </div>
  )
}

export default MemberRegForm