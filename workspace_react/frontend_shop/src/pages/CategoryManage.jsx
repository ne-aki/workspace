import React from 'react'
import PageTitle from '../common/PageTitle'
import Input from '../common/Input'
import Button from '../common/Button'

const CategoryManage = () => {
  return (
    <div>
      <PageTitle
        title='카테고리 관리'
      />
      <p>카테고리 추가</p>
      <Input />
      <Button />
      <p>카테고리 목록</p>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>카테고리 번호</td>
            <td>카테고리명</td>
            <td>수정</td>
            <td>삭제</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default CategoryManage