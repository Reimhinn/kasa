import React, { useContext } from 'react'
import '../styles/LocationCard.css'
import {Link} from "react-router-dom"
import { DataContext } from './App'

function LocationCard () {

  const data = useContext(DataContext)



  return data.map(location => {
    return (
        <Link className='location-card' reloadDocument key={location.id} to={`${location.title}/${location.id}`}>
          <img className='location-cover' src={location.cover} alt={location.title} />
          <h2 className='location-title'>{location.title}</h2>
        </Link>
    )
  })
}

export default LocationCard
