import React, { useState, useEffect } from "react"
import { getBooks } from '../../api'

function Results () {
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    getBooks('heir to')
      .then(data => {
        setResults(data.items)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {!isLoading && results.map(result => <p key={result.id}>{result.title}{result.authors}{result.publisher}</p>)}
    </>)
}

export default Results