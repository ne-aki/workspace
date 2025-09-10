import React from 'react'

const ErrorMsg = ({msg, className, ...props}) => {
  return (
    <p
      style={{
        color : 'red',
        fontSize : '0.8rem',
      }}
      {...props}
    >{msg}</p>
  )
}

export default ErrorMsg