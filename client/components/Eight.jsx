import React from 'react'
import { Link } from 'react-router-dom'

function Eight () {

  return (
    <>


    
    <img src='../images/gnome1.png'></img>
    <div className="buttonOne">
    <button><Link to= {'/game/seven'}>8</Link></button>
    </div>
    </>
  )
  
}


export default Eight