import React from 'react'
import logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useLocation } from 'react-router-dom'

function Header () {
  const location = useLocation()

  return (
    <header id='header'>
      <Link to='/' reloadDocument>
        <img id='kasa-logo' src={logo} alt='kasa logo' />
      </Link>
      <nav id='header-nav'>
        <Link
          style={{
            textDecoration: location.pathname === '/' ? 'underline' : 'none'
          }}
          className='header-link'
          to='/'
        >
          Accueil
        </Link>
        <Link
          style={{
            textDecoration:
              location.pathname === '/about' ? 'underline' : 'none'
          }}
          className='header-link'
          to='/about'
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
