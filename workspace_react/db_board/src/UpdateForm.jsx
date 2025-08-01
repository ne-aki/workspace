import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './UpdateForm.module.css'
import axios from 'axios';

const UpdateForm = ({nav}) => {
  const {boardNum} = useParams();
  console.log(boardNum);
  
  const [board, setBoard] = useState({
    //정석대로라면 처음에 빈 객체
    title : '',
    content : ''
  });

  // const [inputData, setInputData] = useState({
  //   title : '',
  //   content : ''
  // })

  // useEffect(() => {
  //   //마운트 시점이 아니라면
  //   if(board.title !== undefined) {
  //     setInputData({
  //       title : board.title,
  //       content : board.content
  //     });  
  //   }
  // }, [board])

  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data);
      setBoard(res.data);
    })
    .catch(error => console.log(error))
  }, [])

  const handleBoard = e => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }

  // const handleBoard = e => {
  //   setBoard({
  //     ...inputData,
  //     [e.target.name] : e.target.value
  //   })
  // }

  const updateBtn = () => {
    if(board.title === '') {
      alert('제목을 입력하세요.');
      return;
    }
    axios.put(`/api/boards/${boardNum}`, /*inputData*/board)
    .then(res => {
      alert('수정되었습니다.');
      nav(`board-detail/${boardNum}`);
    })
    .catch(error => console.log(error));
  }
  
  return (
    <div className={styles.container}>
      <h1>게시글 수정 페이지</h1>
      <table className={styles.board_detail_table}>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{board.createDate}</td>
            <td>작성자</td>
            <td>{board.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={4} className={styles.input_td}>
              <input type="text" name="title" value={/*inputData.*/board.title} onChange={e => handleBoard(e)} onKeyDown={e => {
                  if(e.key === 'Enter') {
                    regBtn();
                  }
                }} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={4}>
              <textarea name="content" value={/*inputData.*/board.content} onChange={e => handleBoard(e)} rows={8}></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="button" className='bottom-btn' onClick={e => nav(-1)}>뒤로가기</button>
        <button type="button" className='bottom-btn' onClick={e => updateBtn()}>수정</button>
      </p>
    </div>
  )
}

export default UpdateForm