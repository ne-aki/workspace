import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Join from './Join'
import Login from './Login'

function App() {
  const nav = useNavigate();

  return (
    <>
      <Header nav={nav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
