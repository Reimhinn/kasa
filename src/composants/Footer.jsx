import React from 'react'
import logo2 from '../assets/LOGO2.svg'
import '../styles/Footer.css'

function Footer () {
  return (
    <div id='footer'>
      <div id='logo-footer-container'>
        <img id='kasa-logo-footer' src={logo2} alt='kasa logo footer' />
        <p id=''>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
