import React, {useState, useEffect} from 'react'


function Zero () {
  
  useEffect(() => {
    const work = setTimeout(() => {
      setGnome({
        img: (<img src="/images/gnomeSolo.png"/>)
      })
    },3000)
    return () => clearInterval(work)
  })

  const [gnome, setGnome] = useState({
    img: (<img src="/images/scary-image1.png"/>),
  })


  return (
    <>
    <h1>ARRRRRRRRGGGGGGGGGHHHHHHHHH</h1>

    <div>
      {console.log(gnome)}
      {gnome}
    </div>
    </>
  )
  
}

export default Zero