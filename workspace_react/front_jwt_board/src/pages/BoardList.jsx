import React, { useEffect, useState } from 'react'
import ListTable from '../components/ListTable'
import * as boardApi from '../apis/board/board_api'

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const cols = ['No', '제목', '작성자', '작성일', '조회수'];

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
        <ListTable
          cols={cols}
          dataList={boardList}
        />
      </div>
      <div className=""></div>
    </div>
  )
}

export default BoardList