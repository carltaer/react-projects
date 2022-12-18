import React, { useState, useEffect } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Meme = () => {
  
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/24y43o.jpg"
    })

    const [allMemesImages, setAllMemesImages] = useState([])

    function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemesImages.length)
      const url = allMemesImages[randomNumber].url
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url,
      }))
  }

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemesImages(data.data.memes))
    },[])


  function handleChange(event){
    const {value, name} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
    }))
  }

    
  return (
    <main className='meme'>
      <div  className='meme-form'>
        <div>
            <input 
              type="text"
              placeholder='Top Text'
              className='meme-text1'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder='Bottom Text'
              className='meme-text2'
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
            />
        </div>    
        
        <button 
            className='meme-btn' 
            onClick={getMemeImage} 
            >
                Get a new Meme image 
            
            <FontAwesomeIcon icon={faImage} className="image-icon" />
            </button>
      </div>
      <div className='meme-image-div'>
          <img src={meme.randomImage} className="meme-image" alt={meme.name} />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
