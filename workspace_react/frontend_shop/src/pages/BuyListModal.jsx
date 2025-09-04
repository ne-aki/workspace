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
      <table border={1}>
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
                      {detail.bookDTO.title}
                      <img src={`http://localhost:8080/upload/${detail.bookDTO.imgList[0].attachedImgName}`} style={{width: '50px'}} />
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