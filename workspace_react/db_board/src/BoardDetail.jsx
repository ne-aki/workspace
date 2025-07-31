import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import styles from './BoardDetail.module.css'
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
  }, [nav])
  //삭제버튼 클릭 시 실행 함수
  const deleteBtn = () => {
    //confirm 에서 확인 클릭 시 리턴 true, 취소 클릭 시 리턴 false
    const confirmDelete = confirm('삭제하시겠습니까?');
    //확인을 클릭했을 때만 삭제 진행
    if(confirmDelete) {
      axios.delete(`/api/boards/${boardNum}`)
      .then(res => {
        alert('삭제되었습니다.');
        nav('/');
      })
      .catch(error => console.log(error));
    }
  }
  
  return (
    <div className={styles.board_detail_container}>
      <h1>게시글 상세 정보 페이지</h1>
      <table className={styles.board_detail_table}>
        <colgroup>
          <col width={10} />
          <col width={100} />
          <col width={20} />
          <col width={100} />
          <col width={10} />
          <col width={30} />
        </colgroup>
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
            <td colSpan={5} className={styles.align_left}>{board.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={5} className={styles.align_left}>{board.content}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {/* <p>
          <button type="button" className='bottom-btn' onClick={e => nav(`/board-detail/${boardNum - 1}`)}>이전글</button>
          <button type="button" className='bottom-btn' onClick={e => nav(`/board-detail/${boardNum - (-1)}`)}>다음글</button>
        </p> */}
        <p>
          <button type="button" className='bottom-btn' onClick={e => nav('/')}>목록가기</button>
          <button type="button" className='bottom-btn' onClick={e => nav(`/board-update/${boardNum}`)}>수정</button>
          <button type="button" className='bottom-btn' onClick={e => deleteBtn()}>삭제</button>
        </p>
      </div>
    </div>
  )
}

export default BoardDetail