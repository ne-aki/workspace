import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import axios from 'axios';

const BookInfo = () => {
  const[books, setBooks] = useState([]);
  const[isShow, setIsShow] = useState(false);
  const[selectedBook, setSelectedBook] = useState({});
  useEffect(() => {
    axios.get('/api/books')
    .then(res => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <BookList books={books} setIsShow={setIsShow} setSelectedBook={setSelectedBook} />
      {
        isShow ? <BookDetail selectedBook={selectedBook} /> : null
      }
    </div>
  )
}

export default BookInfo