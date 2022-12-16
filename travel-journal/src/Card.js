import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <img src={`${props.imageUrl}`} className="card-img" />
        <div className='card-content'>
            <FontAwesomeIcon icon={faLocationDot} className="card-icon" />
            <span className='country'>{props.location}</span><a href={props.googleMapsUrl} className="googleMap-link">View on Google Maps</a>
            <h2 className='location'>{props.title}</h2>
            <p className='date'>{props.startDate} - {props.endDate}</p>
            <p className='paragraph-content'>{props.description}</p>
            
        </div>
        
    </div>
  )
}

export default Card
