import React from 'react'
import { Link } from 'react-router-dom'

function Three () {

  return (
    <div className="container">
    <img src="/images/gnome5.png" alt="windowsXP with a Gnome"/>
    <Link className="btn2" to= '/game/two'>3</Link>
    </div>
  )
  
}

export default Three