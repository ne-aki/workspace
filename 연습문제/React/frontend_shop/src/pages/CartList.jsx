import React, { useEffect, useState } from 'react'
import styles from './CartList.module.css'
import PageTitle from '../common/PageTitle'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const CartList = () => {
  const nav = useNavigate();

  //장바구니 목록 데이터를 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  //마운트되면 조회한 장바구니 목록을 cartList 변수에 저장
  useEffect(() => {
    //장바구니 페이지를 들어왔는데 만약 로그인 되어있지 않으면
    //강제로 상품 목록 페이지로 이동시키기
    const loginInfo = sessionStorage.getItem('loginInfo');
    if(loginInfo === null){
      alert('접근 권한이 없습니다');
      nav('/');
      return ;
    }

    //JSON -> 객체 변환
    const memId = JSON.parse(loginInfo).memId;
    axios.get(`/api/carts/${memId}`)
    .then(res => {
      console.log(res.data);
      setCartList(res.data);
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.cart_list_table} border={1}>
        <colgroup>
          <col width='3%'/>
          <col width='3%'/>
          <col width='*'/>
          <col width='10%'/>
          <col width='20%'/>
          <col width='10%'/>
          <col width='20%'/>
          <col width='7%'/>
        </colgroup>
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>No</td>
            <td>상품정보</td>
            <td>가 격</td>
            <td>수 량</td>
            <td>총 가격</td>
            <td>등록일</td>
            <td>삭 제</td>
          </tr>
        </thead>
        <tbody>
        {
          cartList.length === 0 
          ? 
          <tr>
            <td colSpan={8}>장바구니에 담은 도서가 없습니다.</td>
          </tr>
          :
          cartList.map((cart, i) => {
            return (
              <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{cartList.length - i}</td>
                <td>
                  <div className={styles.item_info}>
                    <img src="/엑셀실무_메인.pg.jpg" width={'50px'}/>
                    <p>{cart.bookDTO.title}</p>
                  </div>
                </td>
                <td>{cart.bookDTO.price.toLocaleString()}</td>
                <td>
                  <div className={styles.cnt_div}>
                    <Input 
                      type='number' 
                      value={cart.cartCnt} 
                      size='50%'
                    />
                    <Button 
                      title='수량변경' 
                      color='green'
                      size='50%'
                    />
                  </div>
                </td>
                <td>{cart.totalPrice.toLocaleString()}</td>
                <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                <td>
                  <Button title='삭제' color='gray' />
                </td>
              </tr>
            )
          })
        }  
        </tbody>
      </table>
      <div className={styles.buy_div}>
        <p>구매가격 : 10,000</p>
        <Button title='선택 구매'/>
      </div>
    </div>
  )
}

export default CartList