import React, { useEffect, useState } from 'react'
import styles from './RegBook.module.css'
import Select from '../common/Select'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'

const RegBook = () => {
  const [bookInfo, setBookInfo] = useState({
    cateNum : '',
    title : '',
    publisher : '',
    price : '',
    bookIntro : ''
  });

  const [isDisableBtn, setIsDisableBtn] = useState(true);

  const handleBookInfo = e => {
    setBookInfo({
      ...bookInfo,
      [e.target.name] : e.target.value
    });
  }


  const regBtn = () => {
    axios.post('/api/books', bookInfo)
    .then(res => {
      alert('등록 완료')
      setBookInfo({
        cateNum : '',
        title : '',
        publisher : '',
        price : '',
        bookIntro : ''
      })
    })
    .catch(e => console.log(e));
  }

  useEffect(() => {
    if((bookInfo.cateNum && bookInfo.title && bookInfo.publisher && bookInfo.price) !== '') {
      setIsDisableBtn(false);
    } else {
      setIsDisableBtn(true);
    }
  }, [bookInfo]);

  

  console.log(bookInfo);

  return (
    <div className={styles.container}>
      <h3>도서 등록</h3>
      <div className={styles.list}>
        <p>도서 카테고리</p>
        <Select
          name='cateNum'
          value={bookInfo.cateNum}
          onChange={e => {
            handleBookInfo(e);
          }}
        >
          <option value="">카테고리를 선택하세요.</option>
          <option value="1">소설</option>
          <option value="2">인터넷/IT</option>
          <option value="3">자기계발</option>
        </Select>
        <p></p>
      </div>
      <div className={styles.list}>
        <p>도서명</p>
        <Input
          name='title'
          value={bookInfo.title}
          onChange={e => {
            handleBookInfo(e);
          }}
        />
      </div>
      <div className={styles.list}>
        <p>출판사</p>
        <Input
          name='publisher'
          value={bookInfo.publisher}
          onChange={e => {
            handleBookInfo(e);
          }}
        />
      </div>
      <div className={styles.list}>
        <p>가격</p>
        <Input
          name='price'
          value={bookInfo.price}
          onChange={e => {
            handleBookInfo(e);
          }}
        />
      </div>
      <div className={styles.list}>
        <p>도서 설명</p>
        <textarea
          name='bookIntro'
          value={bookInfo.bookIntro}
          onChange={e => {
            handleBookInfo(e);
          }}
        />
      </div>
      <div className={styles.btn_div}>
        <Button
          title='등 록'
          onClick={e => regBtn()}
          disabled={isDisableBtn}
        />
      </div>
    </div>
  )
}

export default RegBook