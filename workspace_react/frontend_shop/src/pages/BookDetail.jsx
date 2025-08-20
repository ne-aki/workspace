import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState({});

  const bookNum = useParams();
  console.log(bookNum);
  

  useEffect(() => {
    axios.get(`/api/books/${bookNum}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e));
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.main_img_div}>
        <img src="../마인크래프트/마인_메인.jpg" alt="ㅁ" />
      </div>
      <div className={styles.content}>
        <table>
          <tbody>
            <tr>
              <td>책이름</td>
              <td></td>
            </tr>
            <tr>
              <td>출판사</td>
              <td></td>
            </tr>
            <tr>
              <td>가격</td>
              <td></td>
            </tr>
            <tr>
              <td>개수</td>
              <td></td>
            </tr>
            <tr>
              <td>총 구매가격</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.detail_img_div}></div>
    </div>
  )
}

export default BookDetail