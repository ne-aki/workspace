import React, { useEffect, useState } from 'react'
import styles from './ManageCar.module.css'
import axios from 'axios';
import PageTitles from '../common/PageTitles';
import Btn from '../common/Btn';
import Table from '../common/Table';
import ErrorMsg from '../common/ErrorMsg';

const ManageCar = () => {
  //차량등록 입력데이터를 저장할 state 변수
  const [regCar, setRegCar] = useState({
    manufacturer : '',
    modelName : '',
    price : ''
  });

  //오류메시지를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState({
    manufacturer : '',
    modelName : '',
    price : ''
  });

  //숫자 입력 정규식
  const regex = /^[0-9]+$/;

  //오류메시지를 표시하는 함수
  const viewErrorMsg = (e) => {
    let errorStr = ''
    switch (e.target.name) {
      case 'manufacturer' :
        e.target.value === ''
        ?
        errorStr = '*제조사를 선택해 주세요.'
        :
        errorStr = ''
        break;
      case 'modelName' :
        e.target.value === ''
        ?
        errorStr = '*모델명을 입력해 주세요.'
        :
        errorStr = ''
        break;
      case 'price' :
        if (e.target.value === '') {
          errorStr = '*가격을 입력해 주세요.'
        } else if (!regex.test(e.target.value)) {
          errorStr = '*숫자만 입력 가능합니다.'
        } else {
          errorStr = ''
        }
        break;
    }
    return errorStr;
  }

  //버튼 활성화 여부를 저장할 state 변수
  const [isDisabled, setIsDisabled] = useState(true);

  //오류메시지를 변경하는 함수
  const handleErrorMsg = (e) => {
    setErrorMsg({
      ...errorMsg,
      [e.target.name] : viewErrorMsg(e)
    })
  }

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
      alert('등록되었습니다.');
      setRegCar({
        manufacturer : '',
        modelName : '',
        price : ''
      })
    })
    .catch(e => console.log(e));
  }

  //버튼 활성화 조건
  const activeBtn = regCar.manufacturer !== ''
                    &&
                    regCar.modelName !== ''
                    &&
                    regCar.price !== ''
                    &&
                    regex.test(regCar.price)


  useEffect(() => {
    //차량 목록 조회
    axios.get('/api/cars')
    .then(res => {
      // console.log(res.data);
      setCarList(res.data);
    })
    .catch(e => console.log(e));

    //버튼 활성화 여부
    if (activeBtn) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
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
            <div>
              <select
                name="manufacturer"
                value={regCar.manufacturer}
                onChange={e => {
                  handleRegCar(e);
                  handleErrorMsg(e);
                }}
              >
                <option value="">선택</option>
                <option value="현대">현대</option>
                <option value="기아">기아</option>
              </select>
              <ErrorMsg msg={errorMsg.manufacturer} />
            </div>
          </div>
          <div>
            <span>모델명</span>
            <div>
              <input
                type="text"
                name="modelName"
                value={regCar.modelName}
                onChange={e => {
                  handleRegCar(e);
                  handleErrorMsg(e);
                }}
                onKeyDown={e => e.key === 'Enter' && activeBtn ? regBtn() : null}
              />
              <ErrorMsg msg={errorMsg.modelName} />
            </div>
          </div>
          <div>
            <span>차량가격</span>
            <div>
              <input
                type="text"
                name="price"
                value={regCar.price}
                onChange={e => {
                  handleRegCar(e);
                  handleErrorMsg(e);
                }}
                onKeyDown={e => e.key === 'Enter' && activeBtn ? regBtn() : null}
              />
              <ErrorMsg msg={errorMsg.price} />
            </div>
          </div>
        </div>
        <div className={styles.btn_div}>
          <Btn onClick={e => regBtn()} disabled={isDisabled} />
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