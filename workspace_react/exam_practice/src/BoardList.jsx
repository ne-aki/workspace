import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './BoardList.css'

const BoardList = (props) => {
  console.log(props);
  
  return (
    <>
      <table className='list-table'>
        <colgroup>
          <col width='*' />
          <col width='60%' />
          <col width='*' />
          <col width='*' />
        </colgroup>
        <thead>
          <tr>
            <td>글번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
          {
            props.boardList.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <span className='title' onClick={() => {
                      //내가 클릭한 제목을 가진 게시글 정보를 BoardDetail.jsx에 전달하겠습니다.
                      props.setIsShow(true);
                      props.setSelectedBoard(e);
                    }}>{e.title}</span>
                  </td>
                  <td>{e.writer}</td>
                  <td>{e.view}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default BoardList