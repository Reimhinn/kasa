import React, { useContext } from 'react'
import '../styles/LocationPage.css'
import { useParams } from 'react-router-dom'
import { DataContext } from './App'
import Carousel from './Carousel'
import Tag from './Tag'
import Rating from './Rating'
import Dropdowns from './Dropdowns'

function LocationPage () {
  const context = useContext(DataContext)

  const params = useParams()

  const locationId = params.locationId

  const locationObject = context.find(locations => locations.id === locationId)

  if (locationObject !== undefined) {
    localStorage.setItem('data', JSON.stringify(locationObject))
  }

  let data = localStorage.getItem('data')
  data = JSON.parse(data)

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags
  } = data

  return (
    <div id='location-page'>
      <Carousel pictures={pictures} />
      <div id='location-header'>
        <div id='location-infos'>
          <h1 id='carousel-title'>{title}</h1>
          <h2 id='carousel-location'>{location}</h2>
          <div id='tags'>
            {tags.map((tagname, index) => {
              return <Tag tagname={tagname} key={index.toString()} />
            })}
          </div>
        </div>
        <div id='location-user'>
          <div id='user-profile'>
            <h2 id='user-name'>{host.name}</h2>
            <div
              id='user-picture'
              style={{ backgroundImage: `url(${host.picture})` }}
            ></div>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
      <Dropdowns dropdowncategory='location' description={description} equipments={equipments} />
    </div>
  )
}

export default LocationPage
