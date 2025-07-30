import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Join from './Join'
import Home from './Home'
import ItemDetail from './ItemDetail'

//Route 컴포넌트 하나가 페이지 하나라고 생각하면 됨!
//Route 컴포넌트 내의 path속성은 요청 url을 의미함
//ex> path="/abc" -> localhost:5173/abc
//ex> path="" -> localhost:5173
//Route 컴포넌트 내의 element 속성은 path로 작성한 url로 접근 시 보여줄 화면
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/items/:itemNum/:title' element={<ItemDetail />} />
        <Route path='*' element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </>
  )
}

export default App
