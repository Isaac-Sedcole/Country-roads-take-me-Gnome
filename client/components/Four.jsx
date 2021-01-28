import React from 'react'
import { Link } from 'react-router-dom'

function Four () {

  return (
    <div className="container">
    <img src="/images/gnome4.png" alt="windowsXP with a Gnome"/>
    <Link className="btn1" to= '/game/eight'>4</Link>
    <Link className="btn2" to= '/game/five'>4</Link>
    <Link className="btn3" to= '/game/three'>4</Link>
    </div>
  )
  
}

export default Four