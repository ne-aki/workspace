import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ItemList from './ItemList'
import RegForm from './RegForm'
import ItemDetail from './ItemDetail'
import UpdateForm from './UpdateForm'

function App() {
  const nav = useNavigate()

  return (
    <>
      <Routes>
        <Route path='/' element={<ItemList nav={nav} />} />
        <Route path='/reg-item' element={<RegForm nav={nav} />} />
        <Route path='/item-detail/:itemNum' element={<ItemDetail nav={nav} />} />
        <Route path='/update-item/:itemNum' element={<UpdateForm nav={nav} />} />
      </Routes>
    </>
  )
}

export default App
