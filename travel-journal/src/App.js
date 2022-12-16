import React from 'react';
import "./style.css"
import Navbar from './Navbar';
import Card from './Card';
import data from "./data"

function App() {
  const travelData = data.map(item => {
    return <Card 
              key = {item.title}
              {...item}
            />
  })
  return (
    <div>
      <Navbar />
      <section>
         {travelData}
      </section>
      

    </div>
  );
}

export default App;
