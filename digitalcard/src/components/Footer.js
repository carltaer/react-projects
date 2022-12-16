import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-list'>
        <li><a href='https://www.facebook.com/carlchristopher.taer'><FontAwesomeIcon icon={faFacebook} size="2x" className='brands' /></a></li>
        <li><a href='https://github.com/carltaer'><FontAwesomeIcon icon={faGithub} size="2x" className='brands' /></a></li>
        <li><a href='https://www.linkedin.com/in/carl-christopher-taer-268435215/'><FontAwesomeIcon icon={faLinkedin} size="2x" className='brands' /></a></li>
        <li><a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} size="2x" className='brands' /></a></li>
      </ul>
    </div>
  )
}

export default Footer
