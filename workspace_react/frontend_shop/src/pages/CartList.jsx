import React, { useEffect, useState } from 'react'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import Input from '../common/Input'
import axios from 'axios'
import styles from './CartList.module.css'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const CartList = () => {
  const nav = useNavigate();
  
  //로그인한 회원 ID
  const loginInfo = sessionStorage.getItem('loginInfo');

  
  

  const [cartList, setCartList] = useState([]);
  
  useEffect(() => {
    //장바구니 페이지를 들어왔는데, 만약 로그인 되어있지 않으면 강제로 상품 목록 페이지로 이동시키기
    if(loginInfo === null) {
      alert('접근 권한이 없습니다.');
      nav('/');
      return;
    }
    //JSON -> 객체 변환
    const memId = JSON.parse(loginInfo).memId;
    axios.get(`/api/carts/${memId}`)
    .then(res => {
      console.log(res.data);
      setCartList(res.data);
    })
    .catch(e => console.log(e))
  }, [loginInfo]);

  let total = 0;

  for(const e of cartList) {
    total = total + e.totalPrice
  }

  return (
    <div className={styles.container}>
      <div>
        <PageTitle
          title='장바구니 목록'
        />
      </div>
      <table className={styles.cart_table}>
        <colgroup>
          <col width='3%' />
          <col width='3%' />
          <col width='*' />
          <col width='10%' />
          <col width='20%' />
          <col width='10%' />
          <col width='20%' />
          <col width='7%' />
        </colgroup>
        <thead>
          <tr>
            <td>
              {/* <input type="checkbox" checked={true} onChange={''} /> */}
            </td>
            <td>No</td>
            <td>도서정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>총 가격</td>
            <td>등록일</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
            cartList.map((cart, i) => {
              return(
                <tr key={i}>
                  <td>
                    {/* <input type="checkbox" checked={true} onChange={''} /> */}
                  </td>
                  <td>{cartList.length - i}</td>
                  <td>
                    <div className={styles.item_info}>
                      <img src="/마인크래프트/마인_메인.jpg" alt="" />
                      <p>{cart.bookDTO.title}</p>
                    </div>
                  </td>
                  <td>{cart.bookDTO.price.toLocaleString()}</td>
                  <td>
                    <div className={styles.cnt_div}>
                      <Input value={cart.cartCnt} type='number' size='50%' />
                      <Button title='수량변경' color='green' size='50%' />
                    </div>
                  </td>
                  <td>{cart.totalPrice.toLocaleString()}</td>
                  <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                  <td>
                    <Button title='삭제' color='gray'
                      onClick={e => deleteCart()}
                    />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className={styles.buy_div}>
        <div>
          <p>구매가격</p>
          <p>{total.toLocaleString()}</p>
        </div>
        <Button
          title='선택 구매'
        />
      </div>
    </div>
  )
}

export default CartList