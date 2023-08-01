import React, { useState } from 'react'
import { BookInfo } from '../../apiTypes'

function Card ({id, title, authors, publisher, images, status}: BookInfo) {
  return (
    <div>
      <img src={images.thumbnail}/>
      <p>{title}</p>
      <p>{authors}.join(, )</p>
      <p>{publisher}</p>
    </div>
  )
}

export default Card