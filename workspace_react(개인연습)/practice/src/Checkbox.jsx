import React, { useState } from 'react'
import { data } from 'react-router-dom';

const Checkbox = () => {
  const [checkboxData, setCheckboxData] = useState([]);

  const handleCheckboxData = e => {
    // if (e.target.checked) {
    //   setCheckboxData([
    //     ...checkboxData,
    //     e.target.value
    //   ]);
    // } else {
    //   const uncheckedData = checkboxData.filter((data) => {
    //     return data !== e.target.value
    //   });
    //   setCheckboxData(uncheckedData);
    // }
    const uncheckedData = checkboxData.filter((checkedData) => {
      return checkedData !== e.target.value
    });
    e.target.checked
    ?
    setCheckboxData([...checkboxData, e.target.value])
    :
    setCheckboxData(uncheckedData)
  }

  console.log(checkboxData)

  return (
    <div>
      <input type="checkbox" name="cbName" value={'first'} onChange={e => handleCheckboxData(e)} /> 첫번째 체크박스 <br />
      <input type="checkbox" name="cbName" value={'second'} onChange={e => handleCheckboxData(e)} /> 두번째 체크박스 <br />
      <input type="checkbox" name="cbName" value={'third'} onChange={e => handleCheckboxData(e)} /> 세번째 체크박스
    </div>
  )
}

export default Checkbox