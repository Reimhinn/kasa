import { React, useEffect, useState } from 'react'
import '../styles/LocationCard.css'
import {Link} from "react-router-dom"

function LocationCard () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./logements.json').then(response =>
      response
        .json()
        .then(data => setData(data))
        .catch(error => console.log(error))
    )
  }, [])

  console.log(data)

  return data.map(location => {
    return (

        <Link className='location-card' key={location.id} to="/about">
          <img className='location-cover' src={location.cover} alt={location.title} />
          <h2 className='location-title'>{location.title}</h2>
        </Link>
    )
  })
}

export default LocationCard
