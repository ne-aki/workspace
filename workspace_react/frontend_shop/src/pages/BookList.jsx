import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PageTitle from '../common/PageTitle';
import styles from './BookList.module.css'
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get('/api/books')
    .then(res => {
      //console.log(res.data);
      setBookList(res.data);
    })
    .catch(e => console.log(e));
  }, []);
  return (
    <div className={styles.container}>
      {
        bookList.map((book, i) => {
          return(
            <div key={i} onClick={() => nav(`/book-detail/${book.bookNum}`)}>
              <div className={styles.img_div}>
                <img src="/마인크래프트/마인_메인.jpg" />
              </div>
              <div className={styles.info}>
                <p>{book.title}</p>
                <p>{'￦' + book.price.toLocaleString()}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default BookList