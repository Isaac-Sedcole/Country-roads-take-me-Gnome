import React,{useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Six () {

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
    <div className="container">
    <img src="/images/gnome2.png" alt="windowsXP with a Gnome"/>


    <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={6}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => {
               setRedirect(true)
            
            }}
          >
            {renderTime}
          </CountdownCircleTimer>
          {(redirect &&  <Redirect to="/" />)}
        </div>

    <Link className="btn3" to= '/game/five'>6</Link>
    </div>
  )
  
}

export default Six