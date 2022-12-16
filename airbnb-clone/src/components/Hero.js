import React from 'react'

const Hero = () => {
  return (
    <div className='hero-component'>
      <img src={("../images/photo-grid.png")} alt="Hero Grid" className='photo-grid' />
      <div>
        <h2 className='body-title'>Online Experiences</h2>
        <p className='body-paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero
