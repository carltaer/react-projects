import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
        <FontAwesomeIcon icon={faEarthAmerica} className="navbar-icon" />
        <span className='navbar-text'>my travel journal.</span>
        </nav>
    </div>
  )
}

export default Navbar
