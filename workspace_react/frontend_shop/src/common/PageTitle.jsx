import React from 'react'

const PageTitle = ({title='페이지 제목'}) => {
  return (
    <p style={{
      fontSize : '1.5rem',
      fontWeight : 'bold',
      fontStyle : 'italic',
      borderBottom : '1.5px solid #cccccc',
      width : '300px',
      paddingBottom : '5px',
      marginBottom : '15px',
    }}>{title}</p>
  )
}

export default PageTitle