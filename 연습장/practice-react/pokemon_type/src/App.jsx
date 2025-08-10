import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [typeList, setTypeList] = useState([]);
  useEffect(() => {
    axios.get('/api/pokemon-types')
    .then(res => setTypeList(res.data))
    .catch(e => console.log(e));
  }, [])

  return (
    <>
      <p>타입을 선택하세요</p>
      <select name="types">
        {
          typeList.map((types, i) => {
            return(
              <option value="">{types.attackType}</option>
            )
          })
        }
      </select>
    </>
  )
}

export default App
