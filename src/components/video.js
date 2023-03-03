import React from 'react';
import ReactPlayer from 'react-player';
import Plyr from 'react-plyr';
// import 'plyr/dist/plyr.css';
import './Videoplayer.css';

function VideoPlayer() {
    const playerStyle = {
      position: 'relative',
      paddingTop: '56.25%', /* 16:9 aspect ratio */
    };
  
    const reactPlayerConfig = {
      controls: true,
      width: '100%',
      height: '100%',
    };
  
    return (
      <div style={playerStyle}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          {...reactPlayerConfig}
        />
      </div>
    );
  }
  

export default VideoPlayer;
