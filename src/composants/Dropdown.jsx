import { React, useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown ({ title, description }) {
  const [open, setOpen] = useState(true)

  const angleClassname = open
    ? 'fa-solid fa-angle-up arrow arrow-up'
    : 'fa-solid fa-angle-down arrow arrow-down'

  return (
    <div className='dropdown-container'>
      <div className='hidding-white'></div>
      <div className='dropdown-button'>
        <h2 className='dropdown-title'>{title}</h2>
        <i
          className={angleClassname}
          onClick={() => {
            setOpen(!open)
          }}
        ></i>
      </div>
      <div className={`dropdown ${open ? 'active' : 'inactive'}`}>
        <div className={`dropdown-description`}>{Array.isArray(description) ? <ul>{description.map((element, index) => { return (<li key={index}>{element}</li>) })}</ul> : <div>{description}</div>}</div>
      </div>
    </div>
  )
}

export default Dropdown
