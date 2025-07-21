import axios from 'axios'
import React from 'react'

const Test4 = () => {
  axios.delete('api/rest-order-infos/2')
  .then(res => console.log(res.data))
  .catch(error => console.log(error))
  return (
    <div>Test4</div>
  )
}

export default Test4