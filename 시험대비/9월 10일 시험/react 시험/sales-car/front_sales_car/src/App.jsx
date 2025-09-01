import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ManageCar from './pages/ManageCar'
import RegSalesInfo from './pages/RegSalesInfo'
import SalesList from './pages/SalesList'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/manage-car' element={ <ManageCar /> } />
        <Route path='/reg-sales-info' element={ <RegSalesInfo /> } />
        <Route path='/sales-list' element={ <SalesList /> } />
      </Routes>
    </>
  )
}

export default App
