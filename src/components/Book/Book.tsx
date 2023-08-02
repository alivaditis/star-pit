import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ApiBookInfo } from '../../apiTypes'
import { getBookDetails } from '../../api'
import { removeTags } from '../../helpers'

function Book () {
  const [book, setBook] = useState<ApiBookInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  type BookParams = {
    id: string | any
  }

  const { id } = useParams<BookParams>()
  
  useEffect(() => {
    setIsLoading(true)
    getBookDetails(id)
      .then(data => {
        setBook(data)
        setIsLoading(false)
      })
  }, [id])

  return (
  <>
    {isLoading ? 
      <p>loading...</p> 
      : <div>
          <img className='book-image' src={book?.volumeInfo.imageLinks.thumbnail}></img>
          <p>{book?.volumeInfo.title}</p>
          <p>{book?.volumeInfo.authors.join(', ')}</p>
          <p>{removeTags(book?.volumeInfo.description)}</p>
        </div>}
  </>
  )
}

export default Book