import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import {Route} from 'react-router-dom'
import Sound from 'react-sound'
// import ReactAudioPlayer from 'react-audio-player'



function Home (){
  const [playing, setPlaying] = useState(false)
  return (
    <>
    {/* <div className="container" onMouseMove={() => {
      console.log('MOVED')
      return setPlaying(true)}}>
     <img src="/images/tree.png"/>
     <ReactAudioPlayer src="/sounds/birdsB.mp3"
     autoPlay={playing ? true : false} />
    </div> */}
    {/* <div className="container" onMouseMove={() => {setPlaying(true)}}>
    <Sound url='/sounds/birdsB.mp3'autoLoad={true} playStatus={playing ? Sound.status.PLAYING: Sound.status.STOPPED} />
      <img src="/images/tree.png"/>
</div> */}
    <h3>click on image :)</h3>
      <button onClick={() => {setPlaying(true)}}> <img src="/images/tree.png"/></button>
    <button><Link to={`/game/eight`}> Country roads, take me Gnome </Link></button>
      <Sound url='/sounds/birdsB.mp3'autoLoad={true} playStatus={playing ? Sound.status.PLAYING: Sound.status.STOPPED} />
  
  </>
  );
}





export default Home