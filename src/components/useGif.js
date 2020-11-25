import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (name) => {
  const [gif, setGif] = useState('')

  const fetchGif = async (name) => {
    const { data } = await axios.get(name ? `${url}&tag=${name}` : url)
    
    const imgSrc = data.data.images.downsized_large.url

    setGif(imgSrc)
}

    useEffect(() => {
        fetchGif(name)
    }, [name])

 return {gif, fetchGif}
}

export default useGif