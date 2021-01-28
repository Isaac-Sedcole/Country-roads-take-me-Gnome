import React from 'react'
import { Link } from 'react-router-dom'

function Five () {

  return (
    <div className="container">
    <img src="/images/gnome3.png" alt="windowsXP with a Gnome"/>
    <Link className="btn1" to= '/game/four'>5</Link>
    </div>
  )
  
}

export default Five