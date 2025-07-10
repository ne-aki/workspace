import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <table>
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
      </table>
      <Footer></Footer>
    </>
  )
}

export default App
