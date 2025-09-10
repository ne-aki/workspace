import React, { useEffect, useState } from 'react'
import styles from './RegSalesInfo.module.css'
import axios from 'axios';
import Btn from '../common/Btn'
import PageTitles from '../common/PageTitles'
import ErrorMsg from '../common/ErrorMsg';
import { useNavigate } from 'react-router-dom';

const RegSalesInfo = () => {
  //입력받은 판매 정보를 저장할 state 변수
  const [salesCar, setSalesCar] = useState({
    buyerName : '',
    color : '',
    modelNum : '',
    buyerTel : ''
  });

  const nav = useNavigate();

  //버튼 활성화 여부를 저장할 state 변수
  const [isDisabled, setIsDisabled] = useState(true);

  //오류메시지를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState({
    buyerName : '',
    color : '',
    modelNum : '',
    buyerTel : ''
  });

  //000-0000-0000 형태의 전화번호 정규식
  const regex = /^\d{3}-\d{4}-\d{4}$/

  //오류메시지를 표시하는 함수
  const viewErrorMsg = e => {
    let errorStr = ''
    switch (e.target.name) {
      case 'buyerName' :
        e.target.value === ''
        ?
        errorStr = '*구매자명을 입력해 주세요.'
        :
        errorStr = ''
        break;
      case 'color' :
        e.target.value === ''
        ?
        errorStr = '*색상을 선택해 주세요.'
        :
        errorStr = ''
        break;
      case 'modelNum' :
        e.target.value === ''
        ?
        errorStr = '*모델을 선택해 주세요.'
        :
        errorStr = ''
        break;
      case 'buyerTel' :
        !regex.test(e.target.value) && e.target.value !== ''
        ?
        errorStr = '*전화번호를 형식에 맞게 입력해 주세요. ex)010-1111-2222'
        :
        errorStr = ''
        break;
    }
    return errorStr;
  }

  //오류메시지를 변경하는 함수
  const handleErrorMsg = e => {
    setErrorMsg({
      ...errorMsg,
      [e.target.name] : viewErrorMsg(e)
    })
  }

  //모델명 리스트를 조회할 state 변수
  const [modelInfo, setModelInfo] = useState([]);

  //모델명 조회
  useEffect(() => {
    axios.get('/api/cars/get-model')
    .then(res => {
      setModelInfo(res.data);
    })
  }, []);

  //버튼 활성화 조건
  const activeBtn = salesCar.buyerName !== ''
                    &&
                    salesCar.color !== ''
                    &&
                    salesCar.modelNum !== ''
                    &&
                    (
                      salesCar.buyerTel === ''
                      ||
                      regex.test(salesCar.buyerTel)
                    );

  //버튼 활성화 여부
  useEffect(() => {
    if (activeBtn) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [salesCar])

  //입력한 판매 정보를 변경하는 함수
  const handleSalesCar = e => {
    setSalesCar({
      ...salesCar,
      [e.target.name] : e.target.value
    })
  }

  //등록버튼 누르면 판매 정보가 등록됨
  const regSalesCar = () => {
    axios.post('/api/sales-cars', salesCar)
    .then(res => {
      alert('등록되었습니다.');
      nav('/sales-list')
    })
    .catch(e => console.log(e));
  }

  //console.log(salesCar);

  return (
    <div className={styles.container}>
      <PageTitles title={'판매정보등록'} />
      <table className={styles.reg_sales_table}>
        <tbody>
          <tr>
            <td>구매자명</td>
            <td colSpan={3}>
              <input
                type="text"
                name="buyerName"
                value={salesCar.buyerName}
                onChange={e => {
                  handleSalesCar(e);
                  handleErrorMsg(e);
                }}
                onKeyDown={e => e.key === 'Enter' && activeBtn ? regSalesCar() : undefined}
              />
              <ErrorMsg msg={errorMsg.buyerName} />
            </td>
          </tr>
          <tr>
            <td>색상</td>
            <td>
              <select
                name="color"
                value={salesCar.color}
                onChange={e => {
                  handleSalesCar(e);
                  handleErrorMsg(e);
                }}
              >
                <option value="">선택</option>
                <option value="화이트">화이트</option>
                <option value="블랙">블랙</option>
                <option value="레드">레드</option>
              </select>
              <ErrorMsg msg={errorMsg.color} />
            </td>
            <td>모델</td>
            <td>
              <select
                name="modelNum"
                value={salesCar.modelNum}
                onChange={e => {
                  handleSalesCar(e);
                  handleErrorMsg(e);
                }}
              >
                <option value="">선택</option>
                {
                  modelInfo.map((model, i) => {
                    return(
                      <option value={model.modelNum} key={i}>{model.modelName}</option>
                    )
                  })
                }
              </select>
              <ErrorMsg msg={errorMsg.modelNum} />
            </td>
          </tr>
          <tr>
            <td>연락처</td>
            <td colSpan={3}>
              <input
                type="text"
                name='buyerTel'
                value={salesCar.buyerTel}
                onChange={e => {
                  handleSalesCar(e);
                  handleErrorMsg(e);
                }}
                onKeyDown={e => e.key === 'Enter' && activeBtn ? regSalesCar() : undefined}
              />
              <ErrorMsg msg={errorMsg.buyerTel} />
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.btn_div}>
        <Btn
          type="button"
          onClick={e => regSalesCar()}
          disabled={isDisabled}
        />
      </p>
    </div>
  )
}

export default RegSalesInfo