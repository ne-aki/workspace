import axios from 'axios'
import React, { useState } from 'react'

const BoardDetail풀이 = () => {
  //input 태그에 입력한 데이터를 저장할 state 변수
  const [boardNum, setBoardNum] = useState('');

  
  //상세 조회 데이터를 저장할 state 변수
  const [board, setBoard] = useState({})

  //표의 표시 여부를 저장하는 state 변수
  const [isShow, setIsShow] = useState(false)

  console.log(board.title);

  //조회버튼 클릭 시 실행 함수
  const getDetail = () => {
    //표를 보이게 변경
    setIsShow(true);
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data);

      //없는 번호라면 (res.data가 빈 문자라면...)
      if(res.data === '') {
        alert('없는 번호입니다.');
        setIsShow(false);
      }

      setBoard(res.data);
    })
    .catch(error => console.log(error));
  }
  
  return (
    <div>
      <h1>게시글 상세 정보 조회 페이지</h1>
      <p>
        조회할 게시글 번호를 입력하세요
        {/* 함수 아닐 때는 name을 넣치 않아도 되지만, value값은 넣어주는 게 좋음 */}
        <input type="number" value={boardNum} onChange={e => setBoardNum(e.target.value)} />
        <button type="button" onClick={e => getDetail()}>조회</button>
      </p>
      {
        // &&, || 는 앞의 조건이 만족하면, 뒤에 조건을 실행하지 않지만, &, | 는 뒤에것까지 실행함
        //즉, 여기서는 &&에서 isShow가 거짓이면 무조건 거짓이기 때문에 뒤에 조건을 실행하지 않는다.
        isShow &&
        <table border={1}>
          <tbody>
            <tr>
              <td>글번호</td>
              <td>{board.boardNum}</td>
              <td>조회수</td>
              <td>{board.readCnt}</td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>{board.writer}</td>
              <td>작성일자</td>
              <td>{board.createDate}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={3}>{board.title}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3}>{board.content}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  )
}

export default BoardDetail풀이