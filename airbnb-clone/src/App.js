import React from 'react'
import "./style.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import dataAirbnb from "./data"


const App = () => {
  const dataElements = dataAirbnb.map(data => {
    return <Card 
            key = {data.id}
            {...data}
            />
  })
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
          {dataElements}
      </section>
      
    </div>
  )
}

export default App