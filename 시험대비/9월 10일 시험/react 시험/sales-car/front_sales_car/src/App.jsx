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
import SalesCarLayout from './layout/SalesCarLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <SalesCarLayout /> }>
          <Route path='' element={ <Home /> } />
          <Route path='manage-car' element={ <ManageCar /> } />
          <Route path='reg-sales-info' element={ <RegSalesInfo /> } />
          <Route path='sales-list' element={ <SalesList /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
