import axios from 'axios'
import React, { useState } from 'react'

const UpdateForm = () => {
  const [updateBoard, setUpdateBoard] = useState({
    boardNum : '',
    title : '',
    content : ''
  });
  const handleUpdateBoard = e => {
    setUpdateBoard({
      ...updateBoard,
      [e.target.name] : e.target.value
    })
  };
  const updateBoardBtn = () => {
    axios.put(`/api/boards/${updateBoard.boardNum}`, updateBoard)
    .then(res => {
      alert(`${res.data}개의 게시글이 수정되었습니다.`);
    })
    .catch(error => console.log(error));
  };
  console.log(updateBoard);
  
  return (
    <div>
      <h2>게시글 정보 수정</h2>
      글번호 <input type="text" name="boardNum" value={updateBoard.boardNum} onChange={e => handleUpdateBoard(e)} />
      <br />
      제목 <input type="text" name="title" value={updateBoard.title} onChange={e => handleUpdateBoard(e)} />
      <br />
      내용 <textarea name="content" value={updateBoard.content} onChange={e => handleUpdateBoard(e)}></textarea>
      <br />
      <button type="button" onClick={e => updateBoardBtn()}>수정</button>
    </div>
  )
}

export default UpdateForm