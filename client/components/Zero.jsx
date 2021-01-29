import React, { useState } from "react";
import Sound from "react-sound";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


function Zero() {
  
  const [playing, setPlaying] = useState(false);
  // const [isStarted, setIsStarted] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">u ded</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };


  return (
    <>
      <div className="container" onMouseMove={() => {
          setPlaying(true);
        }}>
        {/* {!isStarted && ( */}
        <img
         id ="scary-image"
          src="/images/scary-image1.png"
          alt="aaaaaaarrrrrrrrrrrggggggggghhhhhhhhhh"
        />
        {/* )} */}

        <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => {
            setShowImage(true);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
        
      </div>
        {showImage && <img className="spinner" id="spin-gnome"src="/images/gnomeSolo.png" />}

      
        <Sound
          url="/sounds/scare.mp3"
          autoLoad={true}
          playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED}
          // playFromPosition={1000}
        />
        
      </div>
    </>
  );
}

export default Zero;
