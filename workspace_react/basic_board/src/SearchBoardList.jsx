import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchBoardList = () => {
  const [boardListInfo, setBoardListInfo] = useState([]);
  useEffect(() => {
    axios.get('/api/boards')
    .then(res => {
      console.log(res.data);
      setBoardListInfo(res.data);
    })
    .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <h1>게시글 목록 페이지2</h1>
      <p>
        제목
        <input type="text" name="" />
        <button type="button">
          조회
        </button>
      </p>
      <table>
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
                <tr key={i}>
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
    </div>
  )
}

export default SearchBoardList