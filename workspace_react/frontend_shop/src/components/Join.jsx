import styles from './Join.module.css'
import Input from '../common/Input'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Select from '../common/Select'
import axios from 'axios'
import { useState } from 'react'

const Join = ({isOpenJoin, onClose}) => {
  //아이디 유효성 검사 결과를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState('');

  //비밀번호 유효성 결과 메시지를 저장할 state 변수
  const [errorPwMsg, setErrorPwMsg] = useState('');

  //회원가입 버튼 사용 가능 여부를 저장하는 state변수
  const [isDisable, setIsDisAble] = useState(true);

  //회원가입 시 입력한 내용을 저장할 state변수
  const [joinData, setJoinData] = useState({
    memId : '',
    memPw : '',
    confirmPw : '',
    memName : '',
    memTelArr : ['', '', ''],
    firstEmail : '',
    secondEmail : '',
    memEmail : '',
    memAddr : '',
    addrDetail : ''
  });
  
  //값 입력 시 실행할 함수
  const handleJoinData = e => {
    //이메일을 변경했으면
    if(e.target.name === 'firstEmail' || e.target.name === 'secondEmail') {
      setJoinData({
        ...joinData,
        [e.target.name] : e.target.value,
                          'memEmail' : e.target.name === 'firstEmail'
                          ?
                          e.target.value + joinData.secondEmail
                          :
                          joinData.firstEmail + e.target.value
      })
    }

    //이메일을 제외한 다른 데이터를 변경했으면
    else {
      setJoinData({
        ...joinData,
        [e.target.name] : e.target.value
      })
    }
  }

  const join = () => {
    axios.post('/api/members', joinData)
    .then(res => {
      alert('가입되었습니다.');
      //모달창을 닫는다.
      onClose();
      setJoinData({
        memId : '',
        memPw : '',
        confirmPw : '',
        memName : '',
        memTelArr : ['', '', ''],
        firstEmail : '',
        secondEmail : '',
        memEmail : '',
        memAddr : '',
        addrDetail : ''
      });
    })
    .catch(e => console.log(e))
  }

  //joinData 확인용
  //console.log(joinData);

  //연락처 변경 시 실행 함수
  const handlememTelArr = (e, index) => {{
      joinData.memTelArr.splice(index, 1, e.target.value)
      setJoinData({
        ...joinData,
        memTelArr : joinData.memTelArr
      })
    }
  }

  //아이디 사용 가능 여부 확인 함수
  const checkId = () => {
    axios.get(`/api/members/checkId/${joinData.memId}`)
    .then(res => {
      if(res.data) {
        alert('사용 가능한 ID입니다.')

        //회원가입 버튼 활성화
        setIsDisAble(false)
      } else {
        alert('이미 사용중인 아아디입니다.');
      }
    })
    .catch(e => console.log(e));
  }

  return (
    <Modal
      isOpen={isOpenJoin}
      title='회원가입'
      size='400px'
      onClose={() => {
        //x버튼 클릭 시 회원가입 버튼 비활성화
        setIsDisAble(true);

        //x버튼 클릭 시 모달을 닫히게 하는 함수
        onClose();
        
        //입력한 값을 초기화
        setJoinData({
          memId : '',
          memPw : '',
          confirmPw : '',
          memName : '',
          memTelArr : ['', '', ''],
          firstEmail : '',
          secondEmail : '',
          memEmail : '',
          memAddr : '',
          addrDetail : ''
        });
      }}
    >
      <div className={styles.container}>
        <div className={styles.flex_div}>
          <p>아이디</p>
          <div>
            <Input
              size='100%'
              name='memId'
              value={joinData.memId}
              onChange={e => {
                handleJoinData(e);
                setIsDisAble(true);

                //유효성 검사
                //아이디 유효성 검사(정규식 사용)

                //4~8글자, 영문과 숫자만 가능
                const memIdRegex = /^[A-Za-z0-9]{4,8}$/;
                //if(e.target.value === '') {
                if(!e.target.value) { //빈 문자열이면...
                  setErrorMsg('아이디는 필수입력입니다.');
                } else if(e.target.value.length < 4 || e.target.value.length > 8) {
                  setErrorMsg('아이디를 4~8자로 입력해 주세요.');
                } else if(!memIdRegex.test(e.target.value)) {
                  setErrorMsg('아이디는 영문, 숫자만 가능합니다.');
                } else {
                  setErrorMsg('');
                }
              }}
            />
            <Button
              size='50%'
              title='중 복 확 인'
              color='green'
              onClick={e => checkId()}
            />
          </div>
          <p className={styles.error}>{errorMsg}</p>
        </div>
        <div className="">
          <p>비밀번호</p>
          <Input
            size='100%'
            type='password'
            name='memPw'
            value={joinData.memPw}
            onChange={e => {
              handleJoinData(e);
              
              const memPwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/

              if(!e.target.value) {
                setErrorPwMsg('비밀번호는 필수입력 사항입니다.')
              } else if(e.target.value.length < 6 || e.target.value.length > 12) {
                setErrorPwMsg('비밀번호를 6~12자로 입력해 주세요.')
              } else if(!memPwRegex.test(e.target.value)) {
                setErrorPwMsg('비밀번호는 영문 + 숫자 조합으로 입력해 주세요.')
              } else {
                setErrorPwMsg('');
              }
            }}
          />
          <p className={styles.error}>{errorPwMsg}</p>
        </div>
        <div className="">
          <p>비밀번호 확인</p>
          <Input
            size='100%'
            type='password'
            name='confirmPw'
            value={joinData.confirmPw}
            onChange={e => handleJoinData(e)}
          />
        </div>
        <div className="">
          <p>회원명</p>
          <Input
            size='100%'
            name='memName'
            value={joinData.memName}
            onChange={e => handleJoinData(e)}
          />
        </div>
        <div className={styles.flex_div}>
          <p>연락처</p>
          <div>
            <Input
              //splice(a, b, c) : a번째 요소부터 b개의 요소에 c데이터를 넣어라
              size='100%'
              name='memTelArr'
              value={joinData.memTelArr[0]}
              onChange={e => handlememTelArr(e, 0)}
            />
            <span>-</span>
            <Input
              size='100%'
              name='memTelArr'
              value={joinData.memTelArr[1]}
              onChange={e => handlememTelArr(e, 1)}
            />
            <span>-</span>
            <Input
              size='100%'
              value={joinData.memTelArr[2]}
              onChange={e => handlememTelArr(e, 2)}
            />
          </div>
        </div>
        <div className={styles.flex_div}>
          <p>이메일</p>
          <div>
            <Input
              size='100%'
              name='firstEmail'
              value={joinData.firstEmail}
              onChange={e => handleJoinData(e)}
            />
            <span>@</span>
            <Select
              size='80%'
              name={'secondEmail'}
              value={joinData.secondEmail}
              onChange={e => handleJoinData(e)}
            >
              <option value="">선택</option>
              <option value="@gmail.com">gmail.com</option>
              <option value="@naver.com">naver.com</option>
            </Select>
          </div>
        </div>
        <div className={styles.flex_div}>
          <p>주소</p>
          <div>
            <Input
              size='100%'
              name='memAddr'
              value={joinData.memAddr}
              onChange={e => handleJoinData(e)}
            />
            <Button
              size='50%'
              title='검 색'
              color='green'
            />
          </div>
          <p>
            <Input
              size='100%'
              name='addrDetail'
              value={joinData.addrDetail}
              onChange={e => handleJoinData(e)}
            />
          </p>
        </div>
        <Button
          title='회 원 가 입'
          size='100%'
          color='green'
          onClick={e => join()}
          disabled={isDisable} //처음엔 사용 불가
        />
      </div>
    </Modal>
  )
}

export default Join