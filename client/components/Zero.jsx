import React, { useState, useEffect } from "react";

function Zero() {
  return (
    <>
      <div className="container">
        <img
          id="scary-image"
          src="/images/scary-image1.png"
          alt="aaaaaaarrrrrrrrrrrggggggggghhhhhhhhhh"
        />
      </div>

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
    </>
  );
}

export default Zero;
