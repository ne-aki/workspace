import React, { useEffect, useState } from 'react'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import Input from '../common/Input'
import axios from 'axios'
import styles from './CartList.module.css'
import dayjs from 'dayjs'

const CartList = () => {
  const [cartList, setCartList] = useState([]);
  const loginInfo = sessionStorage.getItem('loginInfo');
  const loginData = JSON.parse(loginInfo);
  console.log(loginData.memId);

  useEffect(() => {
    axios.get(`/api/carts/${loginData.memId}`)
    .then(res => {
      console.log(res.data);
      setCartList(res.data);
    })
    .catch(e => console.log(e))
  }, []);

  let total = 0;

  for(const e of cartList) {
    total = total = e.totalPrice
  }

  return (
    <div className={styles.container}>
      <div>
        <PageTitle
          title='장바구니 목록'
        />
      </div>
      <table className={styles.cart_table}>
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
                    <div className={styles.img_div}><img src="/마인크래프트/마인_메인.jpg" alt="" /></div>
                    {cart.bookDTO.title}
                  </td>
                  <td>{cart.bookDTO.price.toLocaleString()}</td>
                  <td>
                    <Input value={cart.cartCnt} type='number' />
                    <Button title='수량변경' color='green' />
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
      <div>
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