import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // 자동으로 생성되는 'StrictMode'는 오류를 한번 더 보라고 두번 실행됨
    <App />
)
