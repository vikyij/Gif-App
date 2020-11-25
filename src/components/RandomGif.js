import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const RandomGif = () => {
  const [gif, setGif] = useState('')

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const { data } = await axios.get(url)
    
    const imgSrc = data.data.images.downsized_large.url

    setGif(imgSrc)
}

    useEffect(() => {
        fetchGif()
    }, [])

  const handleClick = () => {
      fetchGif()
  }

    return (
        <div className="container">
        <h1>Random Gif</h1>
        <img width="500" src={gif} alt="a random gif" />
        <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default RandomGif