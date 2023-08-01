import React, {useEffect, useState} from "react";
import './Search.css'
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputValue, setInput] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

  })

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    navigate(`/search/${inputValue}/1`)
  }

  return (
    <form className="search--form" name="search">
      <div className='search--container'>
        <input
          className='search--input'
          name="search"
          type='text'
          placeholder="Search sci-fi books"
          value= {inputValue}
          onChange= {event => setInput(event.target.value)}
        />
        <button className='search--button'type='submit' onClick={event => handleSubmit(event)}></button>
      </ div>
    </form>
  );
}

export default Search;