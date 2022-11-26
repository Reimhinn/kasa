import React from 'react'
import "../styles/HomePic.css"



function HomePic(props) {

  return (
    <div className='home-pic'>
      <img id='home-img' src={props.image} alt="" />
      <h1 id='home-title'>{props.title}</h1>
    </div>
  )
}

export default HomePic