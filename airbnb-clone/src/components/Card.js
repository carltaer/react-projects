import React from 'react'

const Card = (props) => {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      <div className='card-container'>
      <img src={`./images/${props.coverImg}`} alt="sample" className='card-picture' />
        <div className='card-details'>
          {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={("../images/star.png")} alt="star" className='star' />
            <span>{props.stats.rating}</span>  
            <span className='gray'> ({props.stats.reviewCount}) • </span> 
            <span>{props.location}</span>
            <p>{props.title}</p>  
            <p><span className='bold'>${props.price}</span> / person</p> 
        </div>
        </div>
    </div>
  )
}

export default Card
