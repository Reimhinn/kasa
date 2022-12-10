import React from 'react'
import HomePic from './HomePic'
import Gallery from './Gallery'
import '../styles/Homepage.css'

function Homepage () {
  return (
    <div id='homePage'>
      <HomePic title='Chez vous, partout et ailleurs' classProp='home' />
      <Gallery/>
    </div>
  )
}

export default Homepage
