import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getBooks } from '../../api'
import { BookInfo } from "../../apiTypes";

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
    getBooks(query || '', index || '')
      .then(data => {
        setResults(data.items)
        setTotalItems(data.totalItems)
        setIsLoading(false)
      })
  }, [query, index])

  if (isLoading) {
    return (<p>loading...</p>)
  } else if (!results.length) {
    return (<p>{`No results for ${query}`}</p>)
  } else {
    return (
      <>
        {results.map((result, mapIndex) => <p key={mapIndex}> {result.title}{result.authors}{result.publisher}</p>)}
      </>
    )
  }

}

export default Results