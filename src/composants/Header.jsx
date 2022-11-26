import React from 'react'
import logo from '../assets/LOGO.svg'
import {Link} from "react-router-dom"
import '../styles/Header.css'


function Header() {

  return (
    <header id='header'>
      <img id='kasa-logo' src={logo} alt="kasa logo" />
      <nav id='header-nav'>
        <Link  className='header-link' to="/">Accueil</Link>
        <Link  className='header-link' to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header