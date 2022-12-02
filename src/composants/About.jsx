import React from 'react'
import HomePic from './HomePic'
import homePicAbout from '../assets/home-pic-about.jpg'
import Dropdowns from './Dropdowns'

function About () {
  return (
    <div id='about'>
      <HomePic image={homePicAbout} />
      <Dropdowns dropdowncategory = 'about'/>
    </div>
  )
}

export default About
