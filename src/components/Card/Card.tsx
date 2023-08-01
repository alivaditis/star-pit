import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookInfo } from '../../apiTypes'
import './Card.css'

function Card ({id, title, authors, publisher, publishedDate, images, status}: BookInfo) {
  return (
    <div className='card'>
      <Link to={`/books/${id}`}>
        <img className='card-image' src={images.thumbnail}/>
      </Link>
      <div className='card-info'>
        <Link to={`/books/${id}`}>
        <p>{title}</p>
        </Link>
        <p>{authors.join(', ')}</p>
        <p>{publisher}</p>
        <p>{publishedDate}</p>
      </div>
      <button className='card-button'>want to read</button>
    </div>

  )
}

export default Card