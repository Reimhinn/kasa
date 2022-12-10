import React from 'react'
import '../styles/HomePic.css'



function HomePic ({ title, classProp }) {

  {title ? console.log('title') : console.log('no title')}

  return (
    <div className='home-pic'>
      <div id='home-img' className={classProp}></div>
      <h1 id='home-title'>{title}</h1>
    </div>
  )
}

export default HomePic