import React, { useEffect, useState } from 'react'
import styles from './RegBook.module.css'
import Select from '../common/Select'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { handleRegBookErrorMsg } from '../validate/regBookValidate'

const RegBook = () => {
  const [bookInfo, setBookInfo] = useState({
    cateNum : '',
    title : '',
    publisher : '',
    price : '',
    bookIntro : ''
  });

  const [isDisableBtn, setIsDisableBtn] = useState(true);

  //유효성검사에 필요한 메시지
  const [errorMsg, setErrorMsg] = useState({
    category : '',
    title : '',
    publisher : '',
    price : '',
    bookIntro : ''
  })

  const handleBookInfo = e => {
    setBookInfo({
      ...bookInfo,
      [e.target.name] : e.target.value
    });
  }

  const priceRegex = /^[0-9]+$/

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

  const handleIsDisableBtn =
    (bookInfo.cateNum && bookInfo.title && bookInfo.publisher && bookInfo.price) !== ''
    && priceRegex.test(bookInfo.price)
    && (bookInfo.title.length <= 20 && bookInfo.publisher.length <= 20 && bookInfo.bookIntro.length <= 50);

  useEffect(() => {
    if(handleIsDisableBtn) {
      setIsDisableBtn(false);
    } else {
      setIsDisableBtn(true);
    }
  }, [bookInfo]);

  

  //console.log(bookInfo);

  return (
    <div className={styles.container}>
      <h2>도서 등록</h2>
      <div className={styles.list}>
        <p>도서 카테고리</p>
        <Select
          size='100%'
          name='cateNum'
          value={bookInfo.cateNum}
          onChange={e => {
            handleBookInfo(e);
            setErrorMsg({
              ...errorMsg,
              category : handleRegBookErrorMsg(e)
            });
          }}
        >
          <option value="">카테고리를 선택하세요.</option>
          <option value="1">소설</option>
          <option value="2">인터넷/IT</option>
          <option value="3">자기계발</option>
        </Select>
        <p className={styles.error_msg}>{errorMsg.category}</p>
      </div>
      <div className={styles.list}>
        <p>도서명</p>
        <Input
          size='100%'
          name='title'
          value={bookInfo.title}
          onChange={e => {
            handleBookInfo(e);
            setErrorMsg({
              ...errorMsg,
              title : handleRegBookErrorMsg(e)
            });
          }}
        />
        <p className={styles.error_msg}>{errorMsg.title}</p>
      </div>
      <div className={styles.list}>
        <p>출판사</p>
        <Input
          size='100%'
          name='publisher'
          value={bookInfo.publisher}
          onChange={e => {
            handleBookInfo(e);
            setErrorMsg({
              ...errorMsg,
              publisher : handleRegBookErrorMsg(e)
            })
          }}
        />
        <p className={styles.error_msg}>{errorMsg.publisher}</p>
      </div>
      <div className={styles.list}>
        <p>가격</p>
        <Input
          size='100%'
          name='price'
          value={bookInfo.price}
          onChange={e => {
            handleBookInfo(e);
            setErrorMsg({
              ...errorMsg,
              price : handleRegBookErrorMsg(e, priceRegex)
            })
          }}
        />
        <p className={styles.error_msg}>{errorMsg.price}</p>
      </div>
      <div className={styles.list}>
        <p>도서 설명</p>
        <textarea
          name='bookIntro'
          value={bookInfo.bookIntro}
          onChange={e => {
            handleBookInfo(e);
            setErrorMsg({
              ...errorMsg,
              bookIntro : handleRegBookErrorMsg(e)
            })
          }}
          rows={5}
        />
        <p className={styles.error_msg}>{errorMsg.bookIntro}</p>
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