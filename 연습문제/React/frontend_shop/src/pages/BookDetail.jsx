import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = () => {
  const nav = useNavigate();

  const {bookNum} = useParams(); // {bookNum : 3}

  //조회한 상세 정보를 저장할 state 변수
  const [bookDetail, setBookDetail] = useState({});

  //상품 수량을 저장할 state 변수
  const [cnt, setCnt] = useState(1);

  //마운트되면 도서 상세 조회 및 조회된 데이터를 bookDetail 변수에 저장
  useEffect(() => {
    axios.get(`/api/books/${bookNum}`)
    .then(res => setBookDetail(res.data))
    .catch(e => console.log(e));
  }, []);

  //장바구니 등록 함수
  const addCart = () => {
    //로그인 안했으면
    if(sessionStorage.getItem('loginInfo') === null){
      alert('로그인 필수!');
      return ;
    }

    //로그인한 회원의 id
    //loginInfo = "{"memId":"user","memName":"일반유저","memRole":"USER"}"
    const loginInfo = sessionStorage.getItem('loginInfo');
    //result = {"memId":"user","memName":"일반유저","memRole":"USER"}
    const result = JSON.parse(loginInfo);

    axios.post('/api/carts', {
      'bookNum' : bookNum, 
      'cartCnt' : cnt, 
      'memId' : result.memId
    })
    .then(res => {
      const result = confirm('장바구니에 상품을 담았습니다.\n장바구니 페이지로 이동할까요?');

      if(result){
        //장바구니 페이지로 이동
        nav('/cart-list');
      }

    })
    .catch(e => console.log(e));

  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <img src="/엑셀실무_메인.pg.jpg" />
          </div>
          <div>
            <p>{bookDetail.title}</p>
            <p>{bookDetail.publisher}</p>
            <p>{bookDetail.price && bookDetail.price.toLocaleString()}</p>
            <Input 
              min='1'
              type="number" 
              value={cnt} 
              onChange={e => {
                setCnt(e.target.value)
              }}
            />
            <p>{bookDetail.price && (bookDetail.price * cnt).toLocaleString()}</p>
            <div className={styles.btn_div}>
              <Button 
                title='장바구니' 
                color='green' 
                size='50%'
                onClick={e => addCart()}
              />
              <Button title='구매하기' size='50%'/>
            </div>
          </div>
        </div>
        <div className={styles.intro_div}>
          {bookDetail.bookIntro}
        </div>
      </div>
      <div className={styles.img_div}>
        <img src="/엑셀실무_상세1.jpg" />
      </div>
    </div>
  )
}

export default BookDetail