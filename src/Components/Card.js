import React from 'react'
import './card.css'

const Card = ({item}) => {
  return (
    <div className='card'>
      <img src={item.images.jpg.large_image_url} alt="anime"/>
      <h2>{item.title_english}</h2>
      <a href={item.url}>Know More</a>
    </div>
  )
}

export default Card