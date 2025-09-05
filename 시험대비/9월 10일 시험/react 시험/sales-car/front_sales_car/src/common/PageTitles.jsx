import React from 'react'

const PageTitles = ({title}) => {
  return (
    <h2
      style={{
        borderBottom : '1.5px solid #aaaaaa',
        paddingBottom : '5px',
        margin : '15px 0px',
        width : '300px',
        fontStyle : 'italic'
      }}
    >
      {title}
    </h2>
  )
}

export default PageTitles