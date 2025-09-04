import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import PageTitle from '../common/PageTitle'
import axios from 'axios';
import styles from './BuyListModal.module.css'

const BuyListModal = ({detailList, isOpen, onClose}) => {

  console.log();

  return (
    <Modal
      isOpen={isOpen}
      size='600px'
      title='구매상세내역'
      onClose={onClose}
    >
      <table className={styles.buy_list_table}>
        <colgroup>
          <col width={'5%'} />
          <col width={'*'} />
          <col width={'15%'} />
          <col width={'5%'} />
          <col width={'15%'} />
        </colgroup>
        <thead>
          <tr>
            <td>No</td>
            <td>상품정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>총가격</td>
          </tr>
        </thead>
        <tbody>
          {
            detailList.map((detail, i) => {
              return (
                <tr key={i}>
                  <td>{detailList.length - i}</td>
                  <td>
                    <div className={styles.img_div}>
                      <p>{detail.bookDTO.title}</p>
                      <div><img src={`http://localhost:8080/upload/${detail.bookDTO.imgList[0].attachedImgName}`} /></div>
                    </div>
                  </td>
                  <td>{detail.bookDTO.price}</td>
                  <td>{detail.buyCnt}</td>
                  <td>{detail.totalPrice}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Modal>
  )
}

export default BuyListModal