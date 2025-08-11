import React, { useState } from 'react'
import styles from './ToDoList.module.css'
import deleteIcon from './delete.png'
import editIcon from './edit.png'

const ToDoList = () => {

  const data = [
    {
      id: 1,
      txt: "리액트공부하기",
    },
    {
      id: 2,
      txt: "이력서작성하기",
    },
    {
      id: 3,
      txt: "주말엔휴식",
    }
  ]

  const handleData = e => {}

  const regBtn = () => {
    data.push({
      ...data,
      id : data.length + 1,
      txt : ''
    })
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <h1>To Do List</h1>
      <div className={styles.input_div}>
        <input type="text" onChange={e => handleData(e)}/>
        <button type="button" onClick={e => regBtn()}>등록</button>
      </div>
      <div className={styles.content}>
        {
          data.map((e, i) => {
            return(
              <div className={styles.list} key={i}>
                <p>{e.txt}</p>
                <div className={styles.icon_div}>
                  <img src={editIcon} />
                  <img src={deleteIcon} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ToDoList