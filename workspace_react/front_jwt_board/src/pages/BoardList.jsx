import React, { useEffect, useState } from 'react'
import ListTable from '../components/ListTable'
import * as boardApi from '../apis/board/board_api'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  const nav = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    changeBoardList();
  }, []);

  //조회 후 목록 데이터 세팅 함수
  const changeBoardList = async () => {
    const result = await boardApi.getBoardListApi();
    setBoardList(result);
  }

  return (
    <div>
      <div className="">
        <ListTable>
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
              boardList.length == 0
              ?
              <tr>
                <td colSpan={5}>
                  조회된 데이터가 없습니다.
                </td>
              </tr>
              :
              boardList.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td>
                      <span onClick={() => nav(`/detail/${data.boardNum}`)}>{data.title}</span>
                    </td>
                    <td>{data.writer}</td>
                    <td>{dayjs(data.createDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td>{data.readCnt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </ListTable>
      </div>
      <div className="">
        <button type="button" onClick={() => nav('/write')}>글쓰기</button>
      </div>
    </div>
  )
}

export default BoardList