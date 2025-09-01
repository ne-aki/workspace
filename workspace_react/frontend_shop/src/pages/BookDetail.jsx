import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';

const BookDetail = () => {
  const nav = useNavigate()

  const [bookDetail, setBookDetail] = useState({});

  const [cnt, setCnt] = useState(1);

  const [isMain, setIsMain] = useState('')

  const {bookNum} = useParams();

  

  const totalPrice = bookDetail.price && '￦' + (bookDetail.price * cnt).toLocaleString();

  
  // console.log(bookNum);
  

  useEffect(() => {
    axios.get(`/api/books/${bookNum}`, {params:{bookNum:bookNum, isMain:isMain}})
    .then(res => {
      console.log(res.data);
      setBookDetail(res.data);
    })
    .catch(e => console.log(e));
  }, []);

  //장바구니 등록 함수
  const addCart = () => {
    const loginInfo = sessionStorage.getItem('loginInfo');

    const result = JSON.parse(loginInfo);
    //로그인 안 했으면  
    if (sessionStorage.getItem('loginInfo') === null) {
      alert('장바구니는 로그인이 필요한 서비스입니다.');
      return;
    }
    axios.post('/api/carts', {
      bookNum : bookNum,
      cartCnt : cnt,
      memId : result.memId
    })
    .then(res => {
      const result = confirm('장바구니에 상품을 담았습니다.\n 장바구니 페이지로 이동할까요?');
      if (result) {
        //장바구니 페이지로 이동
        nav('/user/cart-list');
      }
    })
    .catch(e => console.log(e));
  }

  //구매 버튼
  const buyBook = () => {
    const loginInfo = sessionStorage.getItem('loginInfo');

    const result = JSON.parse(loginInfo);
    //로그인 안 했으면  
    if (sessionStorage.getItem('loginInfo') === null) {
      alert('로그인 해 주세요.');
      return;
    }
    axios.post('/api/buys', {
      bookNum : bookNum,
      memId : result.memId,
      buyCnt : cnt
    })
    .then(res => {
      alert('구매 성공')
    })
    .catch(e => console.log(e));
  }

  // console.log(cnt);
  // console.log(bookDetail);
  console.log(bookDetail.imgList);

  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <div className={styles.main_img_div}>
          {
            bookDetail.imgList &&
            bookDetail.imgList.map((img, i) => {
              if (img.isMain === 'Y') {
                return (
                  <img src={`http://localhost:8080/upload/${img.attachedImgName}`} key={i} />
                )
              }
            })
          }
          
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
                    name='cartCnt'
                    min={1}
                    value={cnt}
                    onChange={e => {
                      setCnt(e.target.value);
                    }}
                  />
                  <p className='error-msg'>{cnt < 1 ? '1이상 입력해주세요.' : ''}</p>
                </td>
              </tr>
              <tr>
                <td>총 구매가격</td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.btn_div}>
            <Button
              title='장바구니'
              color='green'
              size='50%'
              onClick={e => addCart()}
            />
            <Button
              title='구매하기'
              size='50%'
              onClick={e => buyBook()}
            />
          </div>
        </div>
      </div>
      <div className={styles.intro_div}>
        <p>{bookDetail.bookIntro}</p>
      </div>
      <div className={styles.detail_img_div}>
        {
          bookDetail.imgList &&
          bookDetail.imgList.map((img, i) => {
            if (img.isMain === 'N') {
              return (
                <img src={`http://localhost:8080/upload/${img.attachedImgName}`} key={i} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default BookDetail