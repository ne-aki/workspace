import React, { useEffect, useState } from 'react'
import './BookList.css'
import axios from 'axios';

const BookList = ({books, setIsShow, setSelectedBook}) => {

  return (
    <div className='book-list-container'>
      <h1>도 서 목 록</h1>
      <table className='book-list-table'>
        <thead>
          <tr>
            <td>No</td>
            <td>도서번호</td>
            <td>도서명</td>
            <td>저자</td>
            <td>도서가격</td>
          </tr>
        </thead>
        <tbody>
          {
            books.map((e, i) => (
              <tr key={i} onClick={event => {
                setSelectedBook(e);
                setIsShow(true);
              }}>
                <td>{books.length - i}</td>
                <td>{e.bookNum}</td>
                <td>{e.title}</td>
                <td>{e.author}</td>
                <td>{e.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BookList