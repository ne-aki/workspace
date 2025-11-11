import React, { Children } from 'react'
import styles from './ListTable.module.css'
import dayjs from 'dayjs'

const ListTable = ({children}) => {
  //행 데이터 생성 함수
  // {title: '글제목', }
  const createRowData = (cols, data) => {
    return cols.map((col, i) => {
      return (
        <td>{data[col]}</td>
      )
    })
  }

  return (
    <table className={styles.list_table}>
      {children}
    </table>
  )
}

export default ListTable