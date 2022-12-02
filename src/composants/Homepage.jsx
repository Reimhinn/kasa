import React from 'react'
import HomePic from './HomePic'
import homePic from '../assets/home-pic.jpg'
import Gallery from './Gallery'
import '../styles/Homepage.css'

function Homepage () {
  return (
    <div id='homePage'>
      <HomePic image={homePic} title='Chez vous, partout et ailleurs' />
      <Gallery/>
    </div>
  )
}

export default Homepage
