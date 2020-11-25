import React, { useState } from 'react'
import useGif from './useGif'


const NamedGif = () => {
  const [name, setName] = useState('christmas')
  const {gif, fetchGif} = useGif(name)

    return (
        <div className="container">
        <h1>Random {name} Gif</h1>
        <img width="500" src={gif} alt="a random gif" />
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter a searchterm"/>
        <button onClick={() => fetchGif(name)}>Click Me!</button>
        </div>
    )
}

export default NamedGif