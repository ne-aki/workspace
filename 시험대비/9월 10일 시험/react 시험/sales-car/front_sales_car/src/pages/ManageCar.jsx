import React, { useEffect, useState } from 'react'
import styles from './ManageCar.module.css'
import axios from 'axios';
import PageTitles from '../common/PageTitles';
import Btn from '../common/Btn';
import Table from '../common/Table';

const ManageCar = () => {
  //차량등록 입력데이터를 저장할 state 변수
  const [regCar, setRegCar] = useState({
    manufacturer : '',
    modelName : '',
    price : ''
  });

  //차량 목록을 저장할 state 변수
  const [carList, setCarList] = useState([]);

  //입력한 차량번호를 변경하는 함수
  const handleRegCar = e => {
    setRegCar({
      ...regCar,
      [e.target.name] : e.target.value
    })
  }

  //등록버튼 누르면 등록되는 함수
  const regBtn = () => {
    axios.post('/api/cars', regCar)
    .then(res => {
      alert('등록성공');
      setRegCar({
        manufacturer : '',
        modelName : '',
        price : ''
      })
    })
    .catch(e => console.log(e));
  }

  //차량 목록 조회
  useEffect(() => {
    axios.get('/api/cars')
    .then(res => {
      // console.log(res.data);
      setCarList(res.data);
    })
    .catch(e => console.log(e));
  }, [regCar]);

  // console.log(regCar);
  // console.log(carList);

  return (
    <div>
      <div className={styles.reg_car}>
        <PageTitles title={'차량 등록'} />
        <div className={styles.reg_info_div}>
          <div>
            <span>제조사</span>
            <select name="manufacturer" value={regCar.manufacturer} onChange={e => handleRegCar(e)}>
              <option value="">선택</option>
              <option value="현대">현대</option>
              <option value="기아">기아</option>
            </select>
          </div>
          <div>
            <span>모델명</span>
            <input type="text" name="modelName" value={regCar.modelName} onChange={e => handleRegCar(e)} />
          </div>
          <div>
            <span>차량가격</span>
            <input type="text" name="price" value={regCar.price} onChange={e => handleRegCar(e)} />
          </div>
        </div>
        <div className={styles.btn_div}>
          <Btn onClick={e => regBtn()} />
        </div>
      </div>
      <div className={styles.car_list}>
        <PageTitles title={'등록된 차량 목록'} />
        <Table>
          <colgroup>
            <col width='25%' />
            <col width='25%' />
            <col width='25%' />
            <col width='25%' />
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            {
              carList.length === 0
              ?
              <tr>
                <td colSpan={4}>조회된 데이터가 없습니다.</td>
              </tr>
              :
              carList.map((car, i) => {
                return (
                  <tr key={i}>
                    <td>{carList.length - i}</td>
                    <td>{car.modelNum}</td>
                    <td>{car.modelName}</td>
                    <td>{car.manufacturer}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ManageCar