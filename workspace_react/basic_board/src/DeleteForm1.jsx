import axios from 'axios';
import React, { useState } from 'react'

const DeleteForm1 = () => {
  const[deleteBoardInfo, setDeleteFormInfo] = useState('');
  
  const deleteBtn = e => {
    axios.delete(`/api/boards/${deleteBoardInfo}`)
    .then(res => res.data === 1 ? alert('정상적으로 삭제되었습니다.') : alert('일치하는 글번호가 없습니다.'))
    .catch(error => console.log(error));
  }
  return (
    <div>
      <h2>게시글 삭제1</h2>
      글번호 <input type="number" name="itemNum" value={deleteBoardInfo} onChange={e => setDeleteFormInfo(e.target.value)} /> <br />
      <button type="button" onClick={e => deleteBtn(e)}>삭제</button>
    </div>
  )
}

export default DeleteForm1