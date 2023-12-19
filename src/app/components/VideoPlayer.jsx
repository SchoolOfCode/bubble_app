import React from 'react';
import videoFile from '../../../public/assets/BBdemo.mp4';

const VideoPlayer = () => {
  return (
    <div>
      <h1>Bubble Breather Video</h1>
      <video width="640" height="360" controls>
        <source src={videoFile} type="video/mp4" />
        
      </video>
    </div>
  );
}

export default VideoPlayer;