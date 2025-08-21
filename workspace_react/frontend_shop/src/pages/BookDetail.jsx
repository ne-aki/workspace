import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState({});

  const [cnt, setCnt] = useState(1);

  const {bookNum} = useParams();
  //console.log(bookNum);
  

  useEffect(() => {
    axios.get(`/api/books/${bookNum}`)
    .then(res => {
      //console.log(res.data);
      setBookDetail(res.data);
    })
    .catch(e => console.log(e));
  }, []);

  console.log(cnt);
  console.log(bookDetail)

  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <div className={styles.main_img_div}>
          <img src="/마인크래프트/마인_메인.jpg" alt="ㅁ" />
        </div>
        <div className={styles.content}>
          <table className={styles.content_table}>
            <tbody>
              <tr>
                <td>책이름</td>
                <td>{bookDetail.title}</td>
              </tr>
              <tr>
                <td>출판사</td>
                <td>{bookDetail.publisher}</td>
              </tr>
              <tr>
                <td>가격</td>
                <td>{
                  bookDetail.price
                  &&
                  '￦' + bookDetail.price.toLocaleString()
                }</td>
              </tr>
              <tr>
                <td>개수</td>
                <td>
                  <Input
                    type='number'
                    size='200px'
                    min={1}
                    value={cnt}
                    onChange={e => setCnt(e.target.value)}
                  />
                  <p className='error-msg'>{cnt < 1 ? '1이상 입력해주세요.' : ''}</p>
                </td>
              </tr>
              <tr>
                <td>총 구매가격</td>
                <td>{bookDetail.price && '￦' + (bookDetail.price * cnt).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.btn_div}>
            <Button
              title='장바구니'
              color='green'
              size='50%'
            />
            <Button
              title='구매하기'
              size='50%'
            />
          </div>
        </div>
      </div>
      <div className={styles.intro_div}>
        <p>{bookDetail.bookIntro}</p>
      </div>
      <div className={styles.detail_img_div}>
        <img src="/마인크래프트/마인_상세1.jpg" alt="d" />
      </div>
    </div>
  )
}

export default BookDetail