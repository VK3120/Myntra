// src/components/LiveLaunch.js

import React from 'react';
import ReactPlayer from 'react-player';

const LiveLaunch = () => {
  return (
    <div className="live-launch">
      <h2>Live Launch</h2>
      {/* Replace the URL with your live stream or video URL */}
      <ReactPlayer url="https://www.youtube.com/watch?v=yourvideoid" controls={true} />
    </div>
  );
};

export default LiveLaunch;
