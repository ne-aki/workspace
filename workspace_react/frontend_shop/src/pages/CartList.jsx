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

  //선택한 체크박스 밗을 저장할 state 변수
  //모든 체크박스가 선택한 채로 화면이 나오려면 조회한 모든 cartNum이 초기값으로 세팅되어야 함
  const [checkData, setCheckData] = useState([]);

  console.log(checkData);
  
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

      //체크박스 초기값 세팅
      const arr = [];
      for (const e of res.data) {
        arr.push(e.cartNum);
      }
      setCheckData(arr)
    })
    .catch(e => console.log(e))
  }, [loginInfo]);

  let total = 0;

  for(const e of cartList) {
    total = total + e.totalPrice
  }

  //체크박스 값 변경 시 실행 함수
  const handleCheckbox = (e) => {
    //체크가 됐다면...
    //cartNum을 숫자로 변환해서 저장  parseInt(문자열)
    if (e.target.checked) {
      setCheckData([...checkData, parseInt(e.target.value)]);
    }
    //체크가 해제 됐다면...
    else {
      const result = checkData.filter((cartNum) => {return cartNum != e.target.value});
      setCheckData(result);
    }
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
          <col width='12%' />
          <col width='7%' />
        </colgroup>
        <thead>
          <tr>
            <td>
              <input type="checkbox" checked={''} onChange={''} />
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
                    <input
                      type="checkbox"
                      checked={checkData.includes(cart.cartNum)}
                      value={cart.cartNum}
                      onChange={e => handleCheckbox(e)}
                    />
                  </td>
                  <td>{cartList.length - i}</td>
                  <td>
                    <div className={styles.item_info}>
                      <div className={styles.img_div}>
                        <img src={`http://localhost:8080/upload/${cart.bookDTO.imgList[0].attachedImgName}`} />
                      </div>
                      <p>{cart.bookDTO.title}</p>
                    </div>
                  </td>
                  <td>{cart.bookDTO.price.toLocaleString()}</td>
                  <td>
                    <div className={styles.cnt_div}>
                      <Input value={cart.cartCnt} type='number' size='50%' />
                      <Button title='변경' color='green' size='50%' />
                    </div>
                  </td>
                  <td>{cart.totalPrice.toLocaleString()}</td>
                  <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                  <td>
                    <Button title='삭제' color='gray' size='100%'
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