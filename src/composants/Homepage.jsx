import React from 'react'
import HomePic from './HomePic';
import homePic from "../assets/home-pic.jpg"

function Homepage() {
  return (
    <div id='homePage'><HomePic image={homePic} title='Chez vous, partout et ailleurs' /></div>
  )
}

export default Homepage