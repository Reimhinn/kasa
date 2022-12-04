import React from 'react'
import HomePic from './HomePic'
import homePicAbout from '../assets/home-pic-about.jpg'
import Dropdowns from './Dropdowns'
import '../styles/About.css'

function About () {
  return (
    <div id='about'>
      <HomePic image={homePicAbout} />
      <Dropdowns dropdowncategory = 'about'/>
    </div>
  )
}

export default About
