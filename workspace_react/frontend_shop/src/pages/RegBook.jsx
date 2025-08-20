import React, { useEffect, useState } from 'react'
import styles from './RegBook.module.css'
import Select from '../common/Select'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { handleRegBookErrorMsg } from '../validate/regBookValidate'

const RegBook = () => {
  const num = '10000';

  //문자열 num을 숫자로 변경
  const result = parseInt(num);
  //alert(result.toLocaleString());
  //특정 문자열 변경
  const a = '안.녕.하.세.요';
  const result2 = a.replaceAll('.', '-'); //안-녕-하-세-요
  //alert(result2)

  //조회된 카테고리 목록을 저장할 변수
  const [cateList, setCateList] = useState([]);

  //입력받은 정보를 저장할 state 변수
  const [bookInfo, setBookInfo] = useState({
    cateNum : '',
    title : '',
    publisher : '',
    price : '',
    bookIntro : ''
  });

  //등록 버튼 활성화 여부를 저장할 state 변수
  const [isDisableBtn, setIsDisableBtn] = useState(true);

  //유효성검사에 필요한 메시지
  const [errorMsg, setErrorMsg] = useState({
    category : '',
    title : '',
    publisher : '',
    price : '',
    bookIntro : ''
  })

  //값 입력 시 실행 함수
  const handleBookInfo = e => {
    //만약 가격 데이터가 들어왔다면 천단위 구분기호를 제외한다.
    
    setBookInfo({
      ...bookInfo,
      [e.target.name] : e.target.name === 'price'
                        ?
                        e.target.value.replaceAll(',', '')
                        :
                        e.target.value
    });
  }

  const priceRegex = /^[,0-9]+$/

  //도서 등록 함수
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
    (
      bookInfo.cateNum
      &&
      bookInfo.title
      &&
      bookInfo.publisher
      &&
      bookInfo.price
    ) !== ''
    &&
    priceRegex.test(bookInfo.price)
    &&
    (
      bookInfo.title.length <= 20 && bookInfo.publisher.length <= 20 && bookInfo.bookIntro.length <= 50
    );

  //마운트되거나, bookData가 변경되어 리렌더링 되면 버튼 활성화 여부 변경
  useEffect(() => {
    //버튼 활성화 여부를 판단하여 disable 변경
    if(handleIsDisableBtn) {
      setIsDisableBtn(false);
    } else {
      setIsDisableBtn(true);
    }
  }, [bookInfo]);

  //마운트되면 카테고리 목록을 조회해서 cateList 변수에 저장
  useEffect(() => {
    axios.get('/api/book-categories')
    .then(res => {
      setCateList(res.data);
    })
    .catch(e => console.log(e))
  }, []);

  
  //입력한 값 확인
  console.log(bookInfo);

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
          {
            cateList.map((e, i) => {
              return(
                <option value={e.cateNum} key={i}>{e.cateName}</option>
              )
            })
          }
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
          value={
            bookInfo.price === '' ? bookInfo.price : parseInt(bookInfo.price).toLocaleString()
          }
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