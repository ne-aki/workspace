//이곳은 연습장입니다.
//ここは練習帳です。
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './content'
import Hello from './Hello'
import axios from 'axios'
import Checkbox from './Checkbox'

function App() {
  // const [restOrderInfo, setRestOrderInfo] = useState(null);
  // useEffect(() => {
  //   axios.post('/api/rest-order-infos')
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((error) => console.log(error))
  // }, [])

  return (
    <>
      {/* <Header />
      <Content />
      <table>
        <thead>
          <tr>
            <td>sklajfl</td>
            <td>safdf</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sfasd</td>
            <td>dsaf</td>
          </tr>
          <tr>
            <td>dsfad</td>
            <td>qwefv</td>
          </tr>
          <tr>
            <td>asdf</td>
            <td>sadfds</td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <Hello />
      <Footer /> */}
      <Checkbox />
    </>
  )
}

export default App
