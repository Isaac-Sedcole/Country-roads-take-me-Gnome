import React,{useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Sound from "react-sound";

function Eight() {

  const [playing, setPlaying] = useState(false);
  
  const [redirect, setRedirect] = useState(false)

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
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
      <div className="container">
        <img src="/images/gnome0.png" alt="windowsXP with a Gnome" />
        
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={8}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => {
               setRedirect(true)
            
            }}
          >
            {renderTime}
          </CountdownCircleTimer>
          {(redirect &&  <Redirect to="/" />)}
        </div>

        <Link className="btn1" to="/game/seven">
          8
        </Link>

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
      </div>

      </div>
    </>
  );
}

export default Eight;
