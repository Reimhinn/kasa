import {React, useState} from 'react'
import '../styles/Dropdown.css'

function Dropdown({title, description}) {

  const [open, setOpen] = useState(false)

  const angleClassname = open? 'fa-solid fa-angle-up arrow-up' : 'fa-solid fa-angle-down arrow-down'

  return (
    <div className='dropdown-container'>
      <div className='dropdown-button'>
        <h2 className='dropdown-title'>{title}</h2>
        <i className={angleClassname} onClick={() => {setOpen(!open)}}></i>
      </div>
      <div className={`dropdown ${open? 'active' : 'inactive'}`}>
        <p className='dropdown-description'>{description}</p>
      </div>
    </div>
  )
}

export default Dropdown