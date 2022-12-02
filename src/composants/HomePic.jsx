import React from 'react'
import '../styles/HomePic.css'

function HomePic ({ image, title }) {
  return (
    <div className='home-pic'>
      <div id='home-img' style={{ backgroundImage: `url(${image})` }}></div>
      <h1 id='home-title'>{title}</h1>
    </div>
  )
}

export default HomePic