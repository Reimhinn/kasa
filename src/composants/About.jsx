import React from 'react'
import HomePic from './HomePic'
import Dropdowns from './Dropdowns'
import '../styles/About.css'

function About () {
  return (
    <div id='about'>
      <HomePic classProp='about' />
      <Dropdowns dropdowncategory = 'about'/>
    </div>
  )
}

export default About
