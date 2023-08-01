import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getBooks } from '../../api'
import { BookInfo } from "../../apiTypes"
import Card from '../Card/Card'

function Results () {
  
  type ResultsParams = {
    index: string,
    query: string;
  };
  
  const {query, index} = useParams<ResultsParams>()
  const [results, setResults] = useState<BookInfo[]>([])
  const [total, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
    
  useEffect(() => {
    setIsLoading(true)
    getBooks(query || '', index || '')
      .then(data => {
        setResults(data.items)
        setTotalItems(data.totalItems)
        setIsLoading(false)
      })
  }, [query, index])

  if (isLoading) {
    return (<p>loading...</p>)
  } else if (results.length) {
      return (<>
        {results.map((book, mapIndex) => <Card key={mapIndex} {...book} />)}
      </>)
  } else {
      return (<p>{`No results for ${query}`}</p>)
  }

}

export default Results