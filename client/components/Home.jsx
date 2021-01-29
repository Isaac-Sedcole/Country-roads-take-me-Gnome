import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Route} from 'react-router-dom'
import Sound from "react-sound";
// import ReactAudioPlayer from 'react-audio-player'

function Home() {
  const [playing, setPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
      {!isStarted && (
        <button onClick={() => setIsStarted(true)}>Get started!</button>
      )}

      {isStarted && (
        <div
          className="container"
          onMouseMove={() => {
            setPlaying(true);
          }}
        >
          <Sound
            url="/sounds/birdsB.mp3"
            autoLoad={true}
            playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED}
          />
          <img src="/images/tree.png" />
          <h1 className="title">COUNTRY ROADS</h1>
          <Link className="btn4" to="/game/eight">
        Take Me, Gnome!
      </Link>
        </div>
      )}


    </>
  );
}

export default Home;
