import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoardList from './BoardList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegForm from './RegForm'
import BoardDetail from './BoardDetail'
import UpdateForm from './UpdateForm'
import UpdateForm풀이 from './UpdateForm풀이'

function App() {
  const nav = useNavigate();
// CURSOR AI (개발자 전용 AI)
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<BoardList nav={nav} />} />
        <Route path='/reg-form' element={<RegForm nav={nav} />} />
        <Route path='/board-detail/:boardNum' element={<BoardDetail nav={nav} />} />
        {/* <Route path='/board-update/:boardNum' element={<UpdateForm nav={nav} />} /> */}
        <Route path='/board-update/:boardNum' element={<UpdateForm풀이 nav={nav} />} />
      </Routes>
    </div>
  )
}

export default App
