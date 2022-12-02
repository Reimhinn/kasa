import React from 'react'
import { useState } from 'react'
import '../styles/Carousel.css'

function Carousel ({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousPicture = () => {
    const isFirstPicture = currentIndex === 0
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextPicture = () => {
    const isLastPicture = currentIndex === pictures.length -1
    const newIndex = isLastPicture ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }


  return (
    <div className='carousel'>
      <div
        className='carousel-pictures'
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      >
        <i className='fa-solid fa-chevron-left arrows left' onClick={previousPicture}></i>
        <i className='fa-solid fa-chevron-right arrows right' onClick={nextPicture}></i>
      </div>
    </div>
  )
}

export default Carousel
