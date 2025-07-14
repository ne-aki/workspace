import React, { useState } from 'react'
import './Test4.css'

const Test4 = () => {
  const [cnt1, setCnt1] = useState(0)
  const [cnt2, setCnt2] = useState(0)
  const [cnt3, setCnt3] = useState(0)
  return (
    <div className="Test4_container">
      <div onClick={() => setCnt1(cnt1 + 1)}>{cnt1}</div>
      <div onClick={() => setCnt2(cnt2 + 1)}>{cnt2}</div>
      <div onClick={() => setCnt3(cnt3 + 1)}>{cnt3}</div>
    </div>
  )
}

export default Test4