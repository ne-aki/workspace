import React, { useState } from 'react'

const PageNation = () => {
  //리스트
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  //현재 페이지 번호
  const [page, setPage] = useState(1);
  //페이지당 개시글 개수
  const itemPerPage = 5;
  //페이지 이동
  const changePageHandle = page => setPage(page);
  //페이지네이션을 통해 보여줄 slice리스트

  return (
    <div>PageNation</div>
  )
}

export default PageNation