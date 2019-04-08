import React from 'react'

import logo from '../logo.svg'

const Travel = ({destination, country,photo, distance}) => { 
    
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          destination : {destination} country : {country} photo : {photo} distance : {distance}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}
   

export default Travel