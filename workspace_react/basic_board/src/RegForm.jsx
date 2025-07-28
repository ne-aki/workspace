import axios from 'axios';
import React, { useState } from 'react'

const RegForm = () => {
  //입력한 내용 저장을 위한 state 변수
  const [boardData, setBoardData] = useState({
    title : '',
    writer : '',
    content : '',
    readCnt : ''
  });

  //값 입력 시 실행되는 함수
  const handleBoardData = e => {
    setBoardData({
      ...boardData,
      [e.target.name] : e.target.value
    })
  };

  //등록 버튼 클릭 시 실행 함수
  const regBoard = e => {
    //입력한 정보를 spring api 에 전달
    axios.post('/api/boards', boardData)
    .then(res => {
      alert('등록 성공!');
    })
    .catch(error => console.log(error))
  };

  console.log(boardData);
  
  return (
    <div>
      <h3>게시글 등록</h3>
      제목 <input type="text" name="title" value={boardData.title} onChange={e => handleBoardData(e)} /> <br />
      작성자 <input type="text" name="writer" value={boardData.writer} onChange={e => handleBoardData(e)} /> <br />
      내용 <textarea name="content" rows={5} cols={50} value={boardData.content} onChange={e => handleBoardData(e)}></textarea> <br />
      조회수 <input type="text" name="readCnt" onChange={e => handleBoardData(e)} /> <br />
      <button type="button" onClick={e => regBoard()}>등록</button>
    </div>
  )
}

export default RegForm