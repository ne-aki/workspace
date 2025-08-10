import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './UpdateForm.module.css'

const UpdateForm = ({nav}) => {
  const {itemNum} = useParams();
  const [itemInfo, setItemInfo] = useState({});
  const [changedItem, setChangedItem] = useState({
    itemCategory : '',
    itemName : '',
    itemPrice : '',
    itemStatus : '',
    itemIntro : ''
  })
  useEffect(() => {
    axios.get(`/api/items/${itemNum}`)
    .then(res => setItemInfo(res.data))
    .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if(itemInfo.itemNum !== undefined) {
      setChangedItem({
        itemCategory : itemInfo.itemCategory,
        itemName : itemInfo.itemName,
        itemPrice : itemInfo.itemPrice,
        itemStatus : itemInfo.itemStatus,
        itemIntro : itemInfo.itemIntro
      });
    }
  }, [itemInfo]);

  const handleChangedItem = e => {
    setChangedItem({
      ...changedItem,
      [e.target.name] : e.target.value
    })
  }

  const changeBtn = () => {
    if(changedItem.itemCategory === '' || changedItem.itemName === '' || changedItem.itemPrice === '') {
      alert('카테고리, 상품명, 상품 가격은 필수사항입니다.');
      return;
    }
    const confirmChange = confirm;
    if(confirmChange('수정하시겠습니까?')) {
      axios.put(`/api/items/${itemNum}`, changedItem)
      .then(res => {
        alert('수정되었습니다.');
        nav(-1);
      })
      .catch(e => console.log(e));
    }
        
    
  }

  //console.log(changedItem);

  return (
    <div className={styles.container}>
      <div>
        <p>상품 카테고리</p>
        <select name="itemCategory" value={changedItem.itemCategory} onChange={e => handleChangedItem(e)}>
          <option value="">선택</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="액세서리">액세서리</option>
        </select>
      </div>
      <div>
        <p>상품명</p>
        <input
          type="text"
          name="itemName"
          value={changedItem.itemName}
          onChange={e => handleChangedItem(e)}
        />
      </div>
      <div>
        <p>상품 가격</p>
        <input
          type="number"
          max={999999999}
          min={100}
          step={100}
          name="itemPrice"
          value={changedItem.itemPrice}
          onChange={e => handleChangedItem(e)}
        />
      </div>
      <div className={styles.status_div}>
        <p>상품 상태</p>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'준비 중'}
            onChange={e => handleChangedItem(e)}
            checked={changedItem.itemStatus === '준비 중'}
          /> 준비 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'판매 중'}
            onChange={e => handleChangedItem(e)}
            checked={changedItem.itemStatus === '판매 중'}
          /> 판매 중
        </span>
        <span>
          <input
            type="radio"
            name="itemStatus"
            value={'매진'}
            onChange={e => handleChangedItem(e)}
            checked={changedItem.itemStatus === '매진'}
          /> 매진
        </span>
      </div>
      <div>
        <p>상품 소개</p>
        <textarea
          name="itemIntro"
          rows="5"
          value={changedItem.itemIntro}
          onChange={e => handleChangedItem(e)}
        ></textarea>
      </div>
      <div className={styles.btn_div}>
        <button type="button" onClick={e => nav(-1)}>취소</button>
        <button
          type="button"
          onClick={e => changeBtn()}
        >수정</button>
      </div>
    </div>
  )
}

export default UpdateForm