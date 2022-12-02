import '../styles/App.css'
import Homepage from './Homepage'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import ErrorPage from './ErrorPage'
import Footer from './Footer'
import LocationPage from './LocationPage'
import React, { useState, useEffect } from 'react'

export const DataContext = React.createContext()

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./logements.json').then(response =>
      response
        .json()
        .then(data => setData(data))
        .catch(error => console.log(error))
    )
  }, [])

  return (
    <div className='app'>
      <Router>
        <Header />

        <Routes>
          <Route
            path='/'
            element={
              <DataContext.Provider value={data}>
                <Homepage />
              </DataContext.Provider>
            }
          />
          <Route path='/about' element={<About />} />
          <Route
            path=':title/:locationId'
            element={
              <DataContext.Provider value={data}>
                <LocationPage />
              </DataContext.Provider>
            }
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
