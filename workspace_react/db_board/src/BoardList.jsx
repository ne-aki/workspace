import React, { useEffect, useState } from 'react'
import styles from './BoardList.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const BoardList = ({nav}) => {
  const [boardListInfo, setBoardListInfo] = useState([]);
  const [selectSearch, setSelectSearch] = useState('');

  useEffect(() => {
    axios.get('/api/boards')
    .then(res => {
      console.log(res.data);
      setBoardListInfo(res.data);
    })
    .catch(error => console.log(error));
  }, []);
  const selectList = (board) => {
    // axios.put(`api/cnt-increment/${board.boardNum}`)
    // .then(res => {})
    // .catch(e => console.log(e));

    nav(`/board-detail/${board.boardNum}`);
  }
  
  return (
    <div className={styles.board_list_container}>
      <h1>자유게시판</h1>
      <div className={styles.search_div}>
        <select value={selectSearch} onChange={e => setSelectSearch(e.target.value)}>
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
        <input type="text" name="" />
        <button type="button">검색</button>
      </div>
      <table className={styles.board_list_table}>
        <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
            <td>댓글</td>
          </tr>
        </thead>
        <tbody>
          {
            boardListInfo.length === 0
            ?
            <tr>
              <td colSpan={6}>조회된 게시글이 없습니다.</td>
            </tr>
            :
            boardListInfo.map((board, i) => {
              return(
                <tr key={i}>
                  <td>{boardListInfo.length - i}</td>
                  <td>
                    <span
                      className={styles.clickable}
                      onClick={e => selectList(board)}
                    >
                      {board.title}
                    </span>
                  </td>
                  <td>{board.writer}</td>
                  <td>{dayjs(board.createDate).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>{board.readCnt}</td>
                  <td></td>
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