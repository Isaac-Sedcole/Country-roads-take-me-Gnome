import React from 'react'
import {Link} from 'react-router-dom'
// import {Route} from 'react-router-dom'
import Sound from 'react-sound'
import Eight from './Eight'

function Home (){
  return (

  <>
  < Sound url="../sounds/birds.wav" 
    playStatus={Sound.status.PLAYING} /> 
  <button><Link to={`/game/eight`}> TEST </Link></button>
  </>
  )
}





export default Home