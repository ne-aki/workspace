import React from 'react'

const Content = () => {
  return (
    <div className='header'>
      <p>개인정보</p>
      <p>이름 <input type="text" placeholder='공백없이 입력하세요.' /></p>
      <p>연락처 <input type="text" /></p>
      <p>지원 분야</p>
      <p><input type="radio" name='field' /> 웹퍼블리싱</p>
      <p><input type="radio" name='field' /> 웹 프론트앤드</p>
      <p><input type="radio" name='field' /> 모바일 앱</p>
      <p>지원동기</p>
      <textarea name="" id="" cols={100} rows={8}></textarea>
    </div>
  )
}

export default Content