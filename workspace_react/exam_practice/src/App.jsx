import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoardList from './BoardList'
import axios from 'axios'
import BoardDetail from './BoardDetail'

function App() {
  //게시글 목록을 저장할 state 변수
  const[board, setBoard] = useState([]);
  
  //선택한 게시글 정보(객체)를 저장할 state 변수
  const[selectedBoard, setSelectedBoard] = useState({});

  //BoardDetail 컴포넌트가 보일지말지 결정한 state 변수
  const[isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios.get('/api/boards')
    .then((res) => {
      console.log(res.data);
      setBoard(res.data)
    })
    .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <BoardList
      // props객체를 사용하려면 html 속성처럼 key={value}로 사용하고, 사용할 컴포넌트에 props.key값으로 사용하는데, 통상적으로 헷갈리지 않기 위해 key값과 value는 동일하게 쓴다.
        boardList={board}
        setSelectedBoard={setSelectedBoard}
        setIsShow={setIsShow}
      />
      {
        isShow
        ?
        <BoardDetail selectedBoard={selectedBoard} />
        :
        null
      }
    </>
  )
}

export default App
