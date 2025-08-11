import React, { useState } from 'react'
import styles from './RegForm.module.css'
import axios from 'axios'

//데이터베이스에 데이터 저장 시 데이터가 올바른지 검사 -> 유효성 검사(validation 처리)
//비밀번호 정규식
const RegForm = ({nav}) => {
  const [regItem, setRegItem] = useState({
    itemCategory : '',
    itemName : '',
    itemPrice : '',
    itemStatus : '준비 중',
    itemIntro : ''
  });

  //유효성 검사에 사용할 변수
  const [isNotValid, setIsNotValid] = useState({
    itemCategory : false,
    itemName : false,
    itemPrice : false
  });

  //값 변경 시 실행 함수
  const handleRegItem = e => {
    setRegItem({
      ...regItem,
      [e.target.name] : e.target.value
    })
  }
  //console.log(regItem);

  //등록버튼 클릭 시 실행
  const regBtn = () => {
    // if(regItem.itemCategory === '' || regItem.itemName === '' || regItem.itemPrice === '') {
    //   alert('카테고리, 상품명, 상품 가격은 필수사항입니다.');
    //   return;
    // }

    //유효성 함수 호출
    const result = checkValid();

    if(result) {
      axios.post('/api/items', regItem)
      .then(res => {
        alert('등록되었습니다.');
        nav('/');
      })
      .catch(e => console.log(e))
    }
  }

  //유효성 검사 함수
  const checkValid = () => {

    //유효성 검사 결과
    let isValid = true;

    //유효성 검사(카테고리)
    if(regItem.itemCategory === '') {
      setIsNotValid({
        ...isNotValid,
        itemCategory : true
      });
      isValid = false;
    }
    //유효성 검사(상품명)
    if(regItem.itemName === '') {
      setIsNotValid({
        ...isNotValid,
        itemName : true
      });
      isValid = false;
    }
    //유효성 검사(가격)
    if(regItem.itemPrice === '' || regItem.itemPrice < 0) {
      setIsNotValid({
        ...isNotValid,
        itemPrice : true
      });
      isValid = false;
    }
    return isValid;
  }

  return (
    <div className={styles.container}>
      <div>
        <p>상품 카테고리</p>
        <select
          name="itemCategory"
          value={regItem.itemCategory}
          onChange={e => handleRegItem(e)}
        >
          <option value="">선택</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="액세서리">액세서리</option>
        </select>
        {
          isNotValid.itemCategory &&
          <p className={styles.not_valid}>
            ※상품 카테고리를 선택해 주세요.
          </p>
        }
      </div>
      <div>
        <p>상품명</p>
        <input
          type="text"
          name="itemName"
          value={regItem.itemName}
          onChange={e => handleRegItem(e)}
          placeholder='상품명을 입력하세요.'
        />
        {
          isNotValid.itemName && //단락평가
          <p className={styles.not_valid}>
            ※상품명은 필수사항입니다.
          </p>
        }
      </div>
      <div>
        <p>상품 가격</p>
        <input
          type="number"
          name="itemPrice"
          value={regItem.itemPrice}
          onChange={e => handleRegItem(e)}
        />
        {
          isNotValid.itemPrice && //단락평가
          <p className={styles.not_valid}>
            ※상품명가격은 필수사항이며, 음수가 들어올 수 없습니다.
          </p>
        }
      </div>
      <div className={styles.status_div}>
        <p>상품 상태</p>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'준비 중'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '준비 중'}
          /> 준비 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'판매 중'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '판매 중'}
          /> 판매 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'매진'}
            onChange={e => handleRegItem(e)}
            checked={regItem.itemStatus === '매진'}
          /> 매진
        </span>
      </div>
      <div>
        <p>상품 소개</p>
        <textarea
          name="itemIntro"
          rows="5"
          value={regItem.itemIntro}
          onChange={e => handleRegItem(e)}
        ></textarea>
      </div>
      <div className={styles.btn_div}>
        <button type="button" onClick={e => nav(-1)}>취소</button>
        <button
          type="button"
          onClick={e => regBtn()}
        >등록</button>
      </div>
    </div>
  )
}

export default RegForm