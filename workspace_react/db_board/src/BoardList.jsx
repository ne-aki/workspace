import React, { useEffect, useState } from 'react'
import './BoardList.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardList = ({nav}) => {
  const [boardListInfo, setBoardListInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/boards')
    .then(res => {
      console.log(res.data);
      setBoardListInfo(res.data);
    })
    .catch(error => console.log(error));
  }, []);
  const selectList = (board) => {
    (board.readCnt)++;
    nav(`/board-detail/${board.boardNum}`);
  }
  
  return (
    <div className='board-list-container'>
      <h1>자유게시판</h1>
      <div className="search-div">
        <select name="">
          <option value="">제목</option>
          <option value="">작성자</option>
        </select>
        <input type="text" name="" />
        <button type="button">검색</button>
      </div>
      <table className='board-list-table'>
        <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
          {
            boardListInfo.map((board, i) => {
              return(
                <tr key={i} onClick={e => selectList(board)}>
                  <td>{boardListInfo.length - i}</td>
                  <td>{board.title}</td>
                  <td>{board.writer}</td>
                  <td>{board.createDate}</td>
                  <td>{board.readCnt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <p>
        <button
          type="button"
          className='bottom-btn'
          onClick={e => nav('/reg-form')}
        >글쓰기</button>
      </p>
    </div>
  )
}

export default BoardList