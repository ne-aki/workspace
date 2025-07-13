//이곳은 연습장입니다.
//ここは練習帳です。
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './content'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
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
      <Footer></Footer>
    </>
  )
}

export default App
