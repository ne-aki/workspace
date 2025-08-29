import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import Input from '../common/Input'
import axios from 'axios'
import styles from './CartList.module.css'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const CartList = () => {
  //장바구니 목록 데이터를 조회하는 useEffect를 재실행하기 위한 변수
  const [reload, setReload] = useState(0);

  const nav = useNavigate();
  
  //로그인한 회원 ID
  const loginInfo = sessionStorage.getItem('loginInfo');

  
  

  const [cartList, setCartList] = useState([]);

  //선택한 체크박스 밗을 저장할 state 변수
  //모든 체크박스가 선택한 채로 화면이 나오려면 조회한 모든 cartNum이 초기값으로 세팅되어야 함
  const [checkData, setCheckData] = useState([]);

  //전체 체크박스의 체크여부를 저장할 state 변수
  const [isChecked, setIschecked] = useState(true);

  //최종 구매 가격을 저장할 state 변수
  const [finalPrice, setFinalPrice] = useState(0);

  //입력받은 cartCnt를 저장할 state 변수
  const [inputCartCnt, setInputCartCnt] = useState(0);

  //조회한 장바구니 목록의 모든 cartNum을 저장할 배열
  //arr 변수는 화면에 보여줄 데이터가 아니기 때문에 state 변수로 줄 필요가 없다.
  //하지만, state 변수가 아니면 리렌더링 됐을 대 arr이 초기화되어 버리는 문제가 발생.
  //우리가 원하는 것은
  // 1. 변수의 값이 초기화되지 않아야 한다.
  // 2. 값이 변해도 리렌더링할 필요는 없다.
  // -> 이 두 조건을 만족하기 위해서는 useRef로 변수를 선언한다.
  // useRef를 사용하면 초기값이 current라는 키의 value로 저장된다.
  const arr = useRef([]); //arr = {current : []}

  //조회한 장바구니 목록 전체 가격의 합을 저장할 변수
  let price = useRef(0); //price = {current : 0}

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
      for (const e of res.data) {
        arr.current.push(e.cartNum); //arr = {current : []}
      }
      setCheckData(arr.current);

      //총 구매 가격 세팅
      //장바구니 목록을 조회할 때마다 총 가격은 0으로 초기화 후 계산
      price.current = 0;
      for (const e of res.data) {
        price.current = price.current + e.totalPrice;
      }
      setFinalPrice(price.current);
    })
    .catch(e => console.log(e));
  }, [reload]);

  // let total = 0;

  // for(const e of cartList) {
  //   total = total + e.totalPrice
  // }

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

  //제목 줄의 체크박스가 변할 때, 총 구매 가격을 변경하는 함수
  const handleFinalPriceAtTitle = (e) => {
    e.target.checked ? setFinalPrice(price.current) : setFinalPrice(0);
  }

  //내용 줄의 체크박스가 변할 때, 총 구매 가격을 변경하는 함수
  const handleFinalPrice = (price, e) => {
    // //체크가 됐다면...
    // if (e.target.checked) {
    //   setFinalPrice(finalPrice + price);
    // }
    // //체크가 해제됐다면...
    // else {
    //   setFinalPrice(finalPrice - price);
    // }
    e.target.checked ? setFinalPrice(finalPrice + price) : setFinalPrice(finalPrice - price);

  }

  //삭제버튼 눌렀을 때
  const deleteCart = (cartNum) => {
    const confirmDelete = confirm('상품을 삭제하시겠습니까?');
    if (!confirmDelete) {
      return;
    }
    axios.delete(`/api/carts/${cartNum}`)
    .then(res => {
      alert('상품이 삭제되었습니다.');
      //reload값이 바귀면서 useEffect 안의 장바구니 목록 조회가 재실행
      setReload(reload + 1);
    })
    .catch(e => console.log(e));
  }

  //수량 변경 함수
  const updateCart = (e, cartNum, bookNum) => {
    axios.put(`/api/carts`, {
      'cartCnt' : e.target.value,
      'bookNum' : bookNum,
      'cartNum' : cartNum
    })
    .then(res => setReload(reload + 1))
    .catch(e => console.log(e));
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
              <input type="checkbox" checked={isChecked} onChange={e => {
                //전체 체크박스가 체크 -> 모든 체크박스 체크
                // 전체 체크박스 체크해제 -> 모든 체크박스 체크 해제
                e.target.checked ? setCheckData(arr.current) : setCheckData([]);

                //제목줄의 체크박스 체크여부를 결정
                setIschecked(!isChecked);

                //제목줄의 체크여부에 따라 총 구매 가격 변경
                handleFinalPriceAtTitle(e);
              }} />
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
            cartList.length === 0
            ?
            <tr>
              <td colSpan={8}>
                장바구니에 상품이 없습니다.
              </td>
            </tr>
            :
            cartList.map((cart, i) => {
              return(
                <tr key={i}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkData.includes(cart.cartNum)}
                      value={cart.cartNum}
                      onChange={e => {
                        //내용줄의 체크박스 체크여부를 결정
                        handleCheckbox(e);
                        
                        //내용줄의 체크박스 체크여부에 따른 총 구매 가격 변경
                        handleFinalPrice(cart.totalPrice, e);
                      }}
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
                      {/* 
                        input 태그의 value와 onChange는 한쌍이다.
                        정상작동을 위해서는 value에 사용하는 데이터와 onChange에서 컨트롤하는 데이터는 동일해야 한다!
                        만약 value와 onChange에서 사용하는 데이터가 다르면 input태그에 입력한 내용이 화면에 반영되지 않는다.
                        
                        결론 1. value와 onChange에 사용하는 데이터는 동일하게 사용하자
                        하지만 value와 onChange의 코드를 작성하면 두 곳에서 사용하는 데이터가 다른 경우도 존재한다.
                        이럴 경우에는, 
                        결론 2. value 대신 defaultValue를 사용한다.
                       */}
                      <Input
                        // value={cart.cartCnt}
                        type='number'
                        size='100%'
                        onChange={e => {
                          updateCart(e, cart.cartNum, cart.bookNum)
                        }}
                        defaultValue={cart.cartCnt}
                        onInput={e => {
                          //키보드를 눌렀을 때 입력한 값이 숫자가 아니면 더 이상 이벤트를 진행하지 않겠다.

                          //기본 이벤트를 막겠다.
                          e.preventDefault()
                        }}
                      />
                    </div>
                  </td>
                  <td>{cart.totalPrice.toLocaleString()}</td>
                  <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                  <td>
                    <Button title='삭제' color='gray' size='100%'
                      onClick={e => deleteCart(cart.cartNum)}
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
          <p>{finalPrice.toLocaleString() + '원'}</p>
        </div>
        <Button
          title='선택 구매'
        />
      </div>
    </div>
  )
}

export default CartList