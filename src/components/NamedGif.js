import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const NamedGif = () => {
  const [gif, setGif] = useState('')
  const [name, setName] = useState('love')

  const fetchGif = async (name) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${name}`
    const { data } = await axios.get(url)
    
    const imgSrc = data.data.images.downsized_large.url

    setGif(imgSrc)
}

    useEffect(() => {
        fetchGif(name)
    }, [name])

  const handleClick = () => {
      fetchGif(name)
  }

    return (
        <div className="container">
        <h1>Random {name} Gif</h1>
        <img width="500" src={gif} alt="a random gif" />
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter a searchterm"/>
        <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default NamedGif