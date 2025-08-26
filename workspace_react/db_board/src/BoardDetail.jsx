import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import styles from './BoardDetail.module.css'
import axios from 'axios';
import dayjs from 'dayjs';

const BoardDetail = ({nav}) => {
  const {boardNum} = useParams();
  console.log(boardNum);
  const [board, setBoard] = useState({});
  const [replyList, setReplyList] = useState([]);
  const [regReply, setRegReply] = useState({
    writer : '',
    content : '',
    boardNum : boardNum
  });

  useEffect(() => {
    axios.put(`/api/cnt-increment/${boardNum}`)
    .then(res => {getBoardDetail()})
    .catch(e => console.log(e));
    
  }, [nav]);

  //댓글 목록 조회
  useEffect(() => {
    axios.get(`/api/replies/${boardNum}`)
    .then(res => setReplyList(res.data))
    .catch(e => console.log(e));
  }, [regReply]);

  //상세정보 조회 함수
  const getBoardDetail = () => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data);
      setBoard(res.data);
    })
    .catch(error => console.log(error))
    
  }

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

  //댓글 정보를 저장할 함수
  const handleRegReply = e => {setRegReply({
    ...regReply,
    [e.target.name] : e.target.value
  })}

  //버튼을 누르면 새로운 댓글을 등록하는 함수
  const regReplyBtn = () => {
    if(regReply.writer === '' || regReply.content === '') {
      alert('작성자 또는 내용을 입력해 주세요.');
      return;
    }
    axios.post('/api/replies', regReply)
    .then(res => {
      alert('댓글이 등록되었습니다.');
      setRegReply({
        writer : '',
        content : '',
        boardNum : boardNum
      })
    })
    .catch(e => console.log(e))
  }

  //댓글 삭제 버튼
  const deleteReply = (replyNum) => {
    const isDeleteReply = confirm('댓글을 삭제하시겠습니까?');
    if (!isDeleteReply) {
      return;
    }
    axios.delete(`/api/replies/${replyNum}`)
    .then(res => {
      alert('삭제되었습니다.');
    })
    .catch(e => console.log(e))
  }

  console.log(regReply);
  
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
            <td>{dayjs(board.createDate).format('YYYY-MM-DD HH:mm:ss')}</td>
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
      <div>
        {/* 댓글 등록 div */}
        <div className={styles.reg_reply_div}>
          <input
            type="text"
            name="writer"
            value={regReply.writer}
            onChange={e => handleRegReply(e)}
            placeholder='작성자'
          />
          <input
            type="text"
            name="content"
            value={regReply.content}
            onChange={e => handleRegReply(e)}
            placeholder='댓글 내용 입력'
            onKeyDown={e => {
              if(e.key === 'Enter') {
                regReplyBtn();
              }
            }}
          />
          <button
            type="button"
            className='bottom-btn'
            onClick={e => regReplyBtn()}
          >댓글등록</button>
        </div>
        {/* 댓글 목록 div */}
        <h3>댓글 {replyList.length}개</h3>
        {
          replyList.map((reply, i) => {
            return (
              <div className={styles.reply_list_div} key={i}>
                <div className={styles.reply_writer_info}>
                  <p>{reply.writer}</p>
                  <p>{dayjs(reply.regDate).format('YYYY.MM.DD')}</p>
                </div>
                <div className={styles.reply_content_info}>
                  <p>{reply.content}</p>
                  <button
                    type="button"
                    className='bottom-btn'
                    onClick={e => deleteReply(reply.replyNum)}
                  >삭제</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BoardDetail