import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import './BoardDetail.css'
import axios from 'axios';

const BoardDetail = ({nav}) => {
  const {boardNum} = useParams();
  console.log(boardNum);
  const [board, setBoard] = useState({})
  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data);
      setBoard(res.data)
    })
  }, [])
  
  return (
    <div className='board-detail-container'>
      <h1>게시글 상세 정보 페이지</h1>
      <table className='board-detail-table'>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{board.createDate}</td>
            <td>작성자</td>
            <td>{board.writer}</td>
            <td>조회수</td>
            <td>{board.readCnt}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={5}>{board.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={5}>{board.content}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="button" className='bottom-btn'>목록가기</button>
        <button type="button" className='bottom-btn'>수정</button>
        <button type="button" className='bottom-btn'>삭제</button>
      </p>
    </div>
  )
}

export default BoardDetail