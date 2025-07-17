import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const ClassAndHobby = () => {
  const[classList, setClassList] = useState([]);
  const[hobbyList, setHobbyList] = useState([]);
  useEffect(() => {
    axios.get('/api/getClass')
    .then((res) => {
      console.log(res.data);
      setClassList(res.data)
    })
    .catch((error) => console.log(error));
  }, [])
  useEffect(() => {
    axios.get('/api/getHobby')
    .then((res) => {
      console.log(res.data);
      setHobbyList(res.data)
    })
    .catch((error) => console.log(error));
  }, [])
  return (
    <>
      <select name="" id="">
        <option value="">반 선택</option>
        {classList.map((e, i) => {
          return (
            <option value="" key={i}>{e}</option>
          )
        })}
      </select>
      <br />
      {
        hobbyList.map((e, i) => {
          return (
            <span key={i}>
              <input type="checkbox" />
              {e}
            </span>
          )
        })
      }
    </>
  )
}

export default ClassAndHobby