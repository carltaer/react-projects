import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"




const Info = () => {
  return (
    <div className='info'>
        <img src={require("../images/carltaer.png")} alt='My Profile' />
        <h3>Carl Christopher Taer</h3>
         <p>Front End Developer</p>
        <a href='mailto:carlchristopher.taer@gmail.com'><small>carlchristopher.taer@gmail.com</small></a> 
      <div className='btn'>
         <button className='email'><FontAwesomeIcon icon={faEnvelope} className="button-icon" size='lg' /><a href='mailto:carlchristopher.taer@gmail.com'  className="button-icon-email">Email</a></button>
         <button className='linkedin'><FontAwesomeIcon icon={faLinkedin} className="button-icon" size='lg' /><a href='https://www.linkedin.com/in/carl-christopher-taer-268435215/' rel='noopener'>LinkedIn</a></button>
      </div>
      <div className='body-text'>
         <h4 className='about'>About</h4>
         <p className='about-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p> 
         <h4 className='interest'>Interests</h4>
         <p className='interest-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
  )
}

export default Info
