import React, { useEffect, useState } from 'react'
import styles from './RegSalesInfo.module.css'
import axios from 'axios';
import Btn from '../common/Btn'
import PageTitles from '../common/PageTitles'

const RegSalesInfo = () => {
  //입력받은 판매 정보를 저장할 state 변수
  const [salesCar, setSalesCar] = useState({
    buyerName : '',
    color : '',
    modelNum : '',
    buyerTel : ''
  });

  //모델명 리스트를 조회할 state 변수
  const [modelInfo, setModelInfo] = useState([]);

  //모델명 조회
  useEffect(() => {
    axios.get('/api/cars/get-model')
    .then(res => {
      setModelInfo(res.data);
    })
  }, []);

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
    })
    .catch(e => console.log(e));
  }

  console.log(salesCar);

  return (
    <div className={styles.container}>
      <PageTitles title={'판매정보등록'} />
      <table className={styles.reg_sales_table}>
        <tbody>
          <tr>
            <td>구매자명</td>
            <td colSpan={3}>
              <input type="text" name="buyerName" value={salesCar.buyerName} onChange={e => handleSalesCar(e)} />
            </td>
          </tr>
          <tr>
            <td>색상</td>
            <td>
              <select name="color" value={salesCar.color} onChange={e => handleSalesCar(e)}>
                <option value="">선택</option>
                <option value="화이트">화이트</option>
                <option value="블랙">블랙</option>
                <option value="레드">레드</option>
              </select>
            </td>
            <td>모델</td>
            <td>
              <select name="modelNum" value={salesCar.modelNum} onChange={e => handleSalesCar(e)}>
                <option value="">선택</option>
                {
                  modelInfo.map((model, i) => {
                    return(
                      <option value={model.modelNum} key={i}>{model.modelName}</option>
                    )
                  })
                }
              </select>
            </td>
          </tr>
          <tr>
            <td>연락처</td>
            <td colSpan={3}>
              <input type="text" name='buyerTel' value={salesCar.buyerTel} onChange={e => handleSalesCar(e)} />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Btn type="button" onClick={e => regSalesCar()}>등 록</Btn>
      </p>
    </div>
  )
}

export default RegSalesInfo