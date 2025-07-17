import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_2 = () => {
  const [javaData, setJavaData] = useState('');
  useEffect(() => {
    //자바의 데이터 조회
    axios.get('/api/getStr')
    .then((res) => {
      console.log(res.data);
      setJavaData(res.data);
    })
    .catch((error) => {
      console.log(error);
    })

    }, [])

  return (
    <div>{javaData}</div>
  )
  
}

export default Axios_2