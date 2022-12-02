import React from 'react'
import '../styles/Tag.css'

function Tag({tagname}) {

  return (
      <div className='tag'>{tagname}</div>
  )
}

export default Tag