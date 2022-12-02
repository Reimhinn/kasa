import React from 'react'
import redStar from '../assets/redstar.svg'
import greyStar from '../assets/greystar.svg'

function Rating ({ rating }) {
  console.log(rating)
  return (
    <div id='stars'>
      <img className='star' src={rating > 0 ? redStar : greyStar} alt='' />
      <img className='star' src={rating > 1 ? redStar : greyStar} alt='' />
      <img className='star' src={rating > 2 ? redStar : greyStar} alt='' />
      <img className='star' src={rating > 3 ? redStar : greyStar} alt='' />
      <img className='star' src={rating > 4 ? redStar : greyStar} alt='' />
    </div>
  )
}

export default Rating
