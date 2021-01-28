import React from 'react'
import { Link } from 'react-router-dom'

function One () {

  return (
    <div className="container">
    <img src="/images/gnome7.png" alt="windowsXP with a Gnome"/>
    <Link className="btn2" to= '/game/zero'>1</Link>
    </div>
  )
  
}

export default One