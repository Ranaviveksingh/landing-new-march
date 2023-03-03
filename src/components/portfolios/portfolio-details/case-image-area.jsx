import React ,{ useEffect, useRef } from 'react';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

// import '../styles.css'
// import Plyr from 'react-plyr';
// import Plyr from 'react-plyr';
// import "./plyr.css"

const CaseImageArea = ({case_item}) => {
  return (
    <div className="cd-banner-area pt-110 pb-100">
     <div className="video-frame">
      <VideoPlayer/>
      </div> 
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cd-banner-img">
            
       {/* <ReactPlayer
       

      // playsInline
      // poster="/assets/poster.png"
      src="https://player.vimeo.com/external/371840234.sd.mp4?s=ffbc00fb81d3719e8cacf20d8752980435da7234&profile_id=164&oauth2_token_id=57447761" 
    /> */}
              {/* <img className='w-100' src="/assets/img/case/case-1.jpg" alt="" /> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);
  
  const playerStyle = {
    position: 'relative',
    margin : 'auto',
    alignitems : 'center',
    
    // paddingTop: '56.25%', /* 16:9 aspect ratio */
  };

  // const reactPlayerConfig = {
    
  //   controls: true,
  //   width: '80%',
  //   height: '720px',
  // };

  return (
    <div>
      
    <div style={playerStyle}>
      {/* /* <ReactPlayer
    
        url='https://player.vimeo.com/external/413043076.sd.mp4?s=bc9b5982127b48cb066b920fedd2558ed2e35679&profile_id=164&oauth2_token_id=57447761' 
        playing={true}
       controls={true}
       autoplay={true}
        {...reactPlayerConfig}
        /> */}
        <div style={playerStyle}>
                <video ref={videoRef} autoPlay muted loop>
      <source src="https://player.vimeo.com/external/413043076.sd.mp4?s=bc9b5982127b48cb066b920fedd2558ed2e35679&profile_id=164&oauth2_token_id=57447761" type="video/mp4"
      
      />
      {/* fallback content */}

    </video>
        
      </div>
    </div>
        </div>
  );
}


export default CaseImageArea;
