import React, { useState } from "react";
import Pagination from "react-js-pagination";

function PageNationPractice() {
  // 게시글 더미 데이터 (1~100번)
  const items = Array.from({ length: 100 }, (_, i) => `게시글 ${i + 1}`);

  // 현재 페이지 상태
  const [activePage, setActivePage] = useState(1);

  // 페이지당 아이템 수
  const itemsPerPage = 15;

  // 현재 페이지에 맞는 아이템 잘라오기
  const indexOfLast = activePage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>게시글 리스트 (페이지네이션 예시)</h2>

      <ul>
        {currentItems.map((item, index) => (
          <li key={index} style={{ padding: "6px 0" }}>
            {item}
          </li>
        ))}
      </ul>

      <Pagination
        activePage={activePage}          // 현재 페이지
        itemsCountPerPage={itemsPerPage} // 페이지당 아이템 개수
        totalItemsCount={items.length}   // 전체 아이템 개수
        pageRangeDisplayed={3}           // 페이지 번호 범위
        onChange={handlePageChange}      // 페이지 변경 시 실행
      />
    </div>
  );
}

export default PageNationPractice;
