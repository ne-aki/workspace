import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoardList from './BoardList'
import { Route, Routes } from 'react-router-dom'
import RegForm from './RegForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<BoardList />} />
        <Route path='/reg-form' element={<RegForm />} />
      </Routes>
    </>
  )
}

export default App
