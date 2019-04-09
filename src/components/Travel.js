import React from 'react'

const Travel = ({destination, country,photo, distance}) => { 
    
    return(
    <div>
        <img src ={photo}/>
        <p>
          destination : {destination} country : {country}  distance :{distance}
        </p>
    </div>
    )
}
   

export default Travel