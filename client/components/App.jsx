import React from 'react'
import {Route} from 'react-router-dom'
import Sound from 'react-sound'
import Home from './Home'

const App = () => {
  return (
    <>
    <h1>React development has begun!</h1>
    <Route path='/' exact component={Home}/>

    <Sound/>
    </>
  )
}

export default App
