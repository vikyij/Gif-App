import React from 'react'
import RandomGif from './components/RandomGif'
import NamedGif from './components/NamedGif'

import './App.css'

const App = () => (
    <div>
        <h1>GIF App</h1>
        <div className="main-container">
            <RandomGif />
            <NamedGif />
        </div>
    </div>
)


export default App