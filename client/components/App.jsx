import React from 'react'
import {Route} from 'react-router-dom'
import Sound from 'react-sound'
import Home from './Home'

import Eight from './Eight'
import Seven from './Seven'
import Six from './Six'
import Five from './Five'
import Four from './Four'
import Three from './Three'
import Two from './Two'
import One from './One'
import Zero from './Zero'



const App = () => {
  return (
    <>
    <Route path='/game/eight' exact component={Eight}/>
    <Route path='/game/seven' exact component={Seven}/>
    <Route path='/game/six' exact component={Six}/>
    <Route path='/game/five' exact component={Five}/>
    <Route path='/game/four' exact component={Four}/>
    <Route path='/game/three' exact component={Three}/>
    <Route path='/game/two' exact component={Two}/>
    <Route path='/game/one' exact component={One}/>
    <Route path='/game/zero' exact component={Zero}/>
    
    <Route path='/' exact component={Home}/>


    <Sound/>
      </>
  )
}

export default App
