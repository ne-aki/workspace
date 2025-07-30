import axios from 'axios';
import React, { useState } from 'react'

const BoardDetail = () => {
  //const [boardNum, setBoardNum] = useState('');
  const [boardInfo, setBoardInfo] = useState({
    boardNum : '',
    readCnt : '',
    writer : '',
    createDate : '',
    title : '',
    content : ''
  })
  const handleBoardInfo = e => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name] : e.target.value
    })
  }
  const viewBtn = () => {
    if(boardInfo.boardNum === '') {
      alert('번호를 입력해 주세요.');
      return;
    }

    axios.get(`/api/boards/${boardInfo.boardNum}`)
    .then(res => {
      console.log(res.data);
      console.log(boardInfo);
      if((res.data.boardNum != boardInfo.boardNum)) {
        alert('게시글이 존재하지 않음');
        return;
      }
      setBoardInfo(res.data);
      setIsShowDetail(true);
    })
    .catch(error => console.log(error));
  }
  const [isShowDetail, setIsShowDetail] = useState(false);
  console.log(boardInfo.boardNum);
  
  return (
    <div>
      <h1>게시글 상세 정보 조회 페이지</h1>
      <p>
        조회할 게시글 번호를 입력하세요
        <input type="number" name="boardNum" value={boardInfo.boardNum} onChange={e => handleBoardInfo(e)} />
        <button type="button" onClick={e => viewBtn()}>조회</button>
      </p>
      {
        isShowDetail
        ?
        <table border={1}>
        <tbody>
          <tr>
            <td>글번호</td>
            <td>{boardInfo.boardNum}</td>
            <td>조회수</td>
            <td>{boardInfo.readCnt}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{boardInfo.writer}</td>
            <td>작성일자</td>
            <td>{boardInfo.createDate}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}>{boardInfo.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}>{boardInfo.content}</td>
          </tr>
        </tbody>
      </table>
      :
      null
      }
    </div>
  )
}

export default BoardDetail