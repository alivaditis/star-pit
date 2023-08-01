import React from 'react'
import { useParams } from 'react-router-dom'

function Book () {
  type BookParams = {
    id: string
  };
  
  const { id } = useParams<BookParams>()
  return (<>
  <p>{id}</p>
  </>)
}

export default Book