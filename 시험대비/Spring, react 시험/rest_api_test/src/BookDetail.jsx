import React from 'react'
import './BookDetail.css'

const BookDetail = ({selectedBook}) => {
  return (
    <div className='book-detail-container'>
      <h1>도서 상세 정보</h1>
      <table className='book-detail-table'>
        <colgroup>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
        </colgroup>
        <tbody>
          <tr>
            <td>도서번호</td>
            <td>{selectedBook.bookNum}</td>
            <td>도서명</td>
            <td>{selectedBook.title}</td>
          </tr>
          <tr>
            <td>저자</td>
            <td>{selectedBook.author}</td>
            <td>가격</td>
            <td>{selectedBook.price}</td>
          </tr>
          <tr className='high-tr'>
            <td>도서소개</td>
            <td colSpan={3}>{selectedBook.introBook}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BookDetail