import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoardList from './BoardList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegForm from './RegForm'
import BoardDetail from './BoardDetail'

function App() {
  const nav = useNavigate();

  return (
    <>
      <Routes>
        <Route path='/' element={<BoardList nav={nav} />} />
        <Route path='/reg-form' element={<RegForm nav={nav} />} />
        <Route path='/board-detail/:boardNum' element={<BoardDetail nav={nav} />} />
      </Routes>
    </>
  )
}

export default App
