import React from 'react'
import useGif from './useGif'


const RandomGif = () => {
  const {gif, fetchGif} = useGif()

    return (
        <div className="container">
        <h1>Random Gif</h1>
        <img width="500" src={gif} alt="a random gif" />
        <button onClick={fetchGif}>Click Me!</button>
        </div>
    )
}

export default RandomGif