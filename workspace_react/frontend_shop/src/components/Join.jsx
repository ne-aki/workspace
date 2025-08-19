import styles from './Join.module.css'
import Input from '../common/Input'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Select from '../common/Select'
import axios from 'axios'
import { useState } from 'react'
import { handleErrorMsg } from '../validate/joinValidate'
import { useDaumPostcodePopup } from 'react-daum-postcode'

const Join = ({isOpenJoin, onClose}) => {
  //다음 주소록 팝업 생성 함수
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')

  //유효성 검사 결과 에러 메시지를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState({
    memId : '',
    memPw : ''
  });

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
      setErrorMsg({
        memId : '',
        memPw : '',
        confirmPw : ''
      })
    })
    .catch(e => console.log(e))
  }

  //joinData 확인용
  //console.log(joinData);

  //연락처 변경 시 실행 함수
  const handlememTelArr = (e, index) => {{
      joinData.memTelArr.splice(index, 1, e.target.value);
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
        alert('이미 사용중인 ID입니다.');
      }
    })
    .catch(e => console.log(e));
  }

  //주소록 띄우기 함수
  const handlePost = () => {
    open({ onComplete : (data) => {
      //매개변수 data 안에 선택한 주소의 모든 정보가 객체형태로 들어있음
      setJoinData({
        ...joinData,
        memAddr : data.address //도로명 주소
      });
    }})
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
        setErrorMsg({
          memId : '',
          memPw : '',
          confirmPw : ''
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
                //유효성 결과 세팅
                setErrorMsg({
                  ...errorMsg,
                  memId : handleErrorMsg(e)
                });
              }}
            />
            <Button
              size='50%'
              title='중 복 확 인'
              color='green'
              onClick={e => checkId()}
            />
          </div>
          <p className={styles.error}>{errorMsg.memId}</p>
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
              
              //유효성 검사
              setErrorMsg({
                ...errorMsg,
                memPw : handleErrorMsg(e),
              });
            }}
          />
          <p className={styles.error}>{errorMsg.memPw}</p>
        </div>
        <div className="">
          <p>비밀번호 확인</p>
          <Input
            size='100%'
            type='password'
            name='confirmPw'
            value={joinData.confirmPw}
            onChange={e => {
              handleJoinData(e);

              //유효성 검사
              setErrorMsg({
                ...errorMsg,
                confirmPw : handleErrorMsg(e, joinData)
              });
            }}
          />
          <p className={styles.error}>{errorMsg.confirmPw}</p>
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
              readOnly={true}
              onClick={() => handlePost()}
            />
            <Button
              size='50%'
              title='검 색'
              color='green'
              onClick={
                //onComplete는 쓰는 이름이 정해져있음(무조건 onComplete로 씀)
                () => handlePost()
              }
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