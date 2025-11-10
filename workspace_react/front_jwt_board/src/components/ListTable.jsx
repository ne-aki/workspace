import React from 'react'
import styles from './ListTable.module.css'
import dayjs from 'dayjs'

const ListTable = ({cols=[], dataList=[]}) => {
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
      <thead>
        <tr>
          {
            cols.map((e, i) => {
              return ( <td key={i}>{e}</td> )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          dataList.length == 0
          ?
          <tr>
            <td colSpan={cols.length}>
              조회된 데이터가 없습니다.
            </td>
          </tr>
          :
          dataList.map((data, i) => {
            return (
              <tr key={i}>
                <td>{dataList.length - i}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
                <td>{dayjs(data.createDate).format('YYYY-MM-DD HH:mm')}</td>
                <td>{data.readCnt}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ListTable