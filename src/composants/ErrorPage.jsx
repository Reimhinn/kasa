import React from 'react'
import '../styles/ErrorPage.css'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div id='error-container'>
      <h1 id='h1-404'>404</h1>
      <p id='error-message'>Oups ! La page que vous demandez n'existe pas.</p>
      <Link id='error-link' to="/">Retourner sur la page d’accueil</Link>
    </div>
    )
  }


export default ErrorPage