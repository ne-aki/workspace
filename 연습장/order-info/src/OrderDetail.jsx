import React from 'react'
import './OrderDetail.css'
import axios from 'axios'

const OrderDetail = ({selectOrderList, setIsShowDetail, setOrderListInfo, orderListInfo}) => {
  //삭제버튼
  const deleteBtn = () => {
    axios.delete(`/api/rest-order-infos/${selectOrderList.itemNum}`)
    .then(res => {
      console.log(res.data);
      setOrderListInfo(orderListInfo);
      alert('삭제되었습니다.');
      setIsShowDetail(false);
    })
    .catch(error => console.log(error));
  }
  return (
    <div className='order-detail'>
      <h2>주문 상세 정보</h2>
      <table className='order-detail-table'>
        <colgroup>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
          <col width='25%'/>
        </colgroup>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>{selectOrderList.itemNum}</td>
            <td>상품명</td>
            <td>{selectOrderList.itemName}</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>{selectOrderList.price}원</td>
            <td>수량</td>
            <td>{selectOrderList.cnt}</td>
          </tr>
          <tr>
            <td>주문자ID</td>
            <td>{selectOrderList.id}</td>
            <td>구매금액</td>
            <td>{selectOrderList.total}원</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="button" onClick={e => deleteBtn()}>
          삭제
        </button>
        <button type="button" onClick={() => setIsShowDetail(false)}>닫기</button>
      </p>
    </div>
  )
}

export default OrderDetail