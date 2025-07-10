import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//react의 html코드는 App 컴포넌트 안의 return 문에 작성한다.
//html코드느 무조건 하나의 최상위 태그를 지녀야 한다.

//함수 vs 컴포넌트
//이름이 소문자로 되어 있으면 함수!
//이름이 대문자로 시작하면 컴포넌트!

function App() {
  const name = 'hi';
  const arr = [1, 2, 3];
  ///객체 전체는 html로 표현할 수 없다!
  const person = {
    name : 'kim',
    age : 20
  }
  function Header() {
    return (
      <div>
        이곳은 header 영역입니다.
      </div>
    )
  }
  return (
    <>
      <Header></Header>
      <div>{name}</div>
      <div>hello</div>
      <Header></Header>
      <div>{arr[0]}</div>
      <div>{person.name}</div>
      <div>
        이곳은 footer 영역입니다.
      </div>
    </>
  )
}

export default App
