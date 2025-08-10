import React, { useEffect, useState } from 'react'
import styles from './UpdateForm.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateForm풀이 = ({nav}) => {
  const {boardNum} = useParams();
  //console.log(boardNum);
  
  //조회한 정보를 저장할 state 변수
  const [board, setBoard] = useState({});

  //입력한 제목과 내용을 저장할 state 변수
  const [inputData, setInputData] = useState({
    title : '',
    content : ''
  });

  console.log(inputData);

  //제목과 내용을 입력할 때마다 실행하는 함수
  const handleInputData = e => {
    setInputData({
      ...inputData,
      [e.target.name] : e.target.value
    })
  }

  //board가 값이 바뀔 때만 실행! + 마운트 시에도 실행 x
  //의존성 배열에 board를 넣으면 board값이 바뀌어서 리렌더링 될 때도 실행!
  useEffect(() => {
    //마운트 시점이 아니라면
    if(board.title !== undefined) {
      setInputData({
        title : board.title,
        content : board.content
      });  
    }
  }, [board])

  //마운트되면 수정하려는 게시글 정보를 조회해야 함
  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      //console.log(res.data);
      setBoard(res.data);
    })
    .catch(error => console.log(error))
  }, [])

  const updateBtn = () => {
    if(board.title === '') {
      alert('제목을 입력하세요.');
      return;
    }
    axios.put(`/api/boards/${boardNum}`, inputData)
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
              <input type="text" name="title" value={inputData.title} onChange={e => handleInputData(e)} onKeyDown={e => {
                if(e.key === 'Enter') {
                  regBtn();
                }
              }} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={4}>
              <textarea name="content" value={inputData.content} onChange={e => handleInputData(e)} rows={8}></textarea>
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

export default UpdateForm풀이