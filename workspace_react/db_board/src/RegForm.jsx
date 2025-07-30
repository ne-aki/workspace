import React, { useState } from 'react'
import './RegForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegForm = ({nav}) => {
  const [regBoard, setRegBoard] = useState({
    title : '',
    writer : '',
    content : ''
  });
  const handleRegBoard = e => {
    setRegBoard({
      ...regBoard,
      [e.target.name] : e.target.value
    });
  }
  const regBtn = () => {
    if(regBoard.title === '') {
        alert('제목을 입력해 주세요.');
        return;
      }
      if(regBoard.writer === '') {
        alert('작성자를 입력해 주세요.');
        return;
      }
    axios.post('/api/boards', regBoard)
    .then(res => {
      alert('등록되었습니다.');
      nav('/')
    })
    .catch(error => console.log(error));
  }
  return (
    <div className='reg-form-container'>
      <h1>게시글 작성 페이지</h1>
      <table className='reg-form-table'>
        <colgroup>
          <col width={150} />
          <col width='*' />
        </colgroup>
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input
                type="text"
                name="title"
                value={regBoard.title}
                onChange={e => handleRegBoard(e)}
              />
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <input
                type="text"
                name="writer"
                value={regBoard.writer}
                onChange={e => handleRegBoard(e)}
                onKeyDown={e => {
                  if(e.key === 'Enter') {
                    regBtn();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea
                name="content"
                rows={10}
                value={regBoard.content}
                onChange={e => handleRegBoard(e)}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button
          type="button"
          className='bottom-btn'
          onClick={e => nav('/')}
        >
          뒤로가기
        </button>
        <button
          type="button"
          className='bottom-btn'
          onClick={e => regBtn()}
        >
          글등록
        </button>
      </p>
    </div>
  )
}

export default RegForm