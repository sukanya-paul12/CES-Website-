import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const videoRef = useRef(null);

    const closePlayer = (e)=>{
        if(e.target === player.current){
           if (videoRef.current) {
             videoRef.current.pause();
           }
           setPlayState(false); 
        }
    }

    useEffect(() => {
      if (!playState && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, [playState]);

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video ref={videoRef} src="/ces-video.mp4" controls preload="auto" playsInline onLoadedMetadata={(e) => { e.currentTarget.muted = false; e.currentTarget.volume = 1.0; }}></video>
    </div>
  )
}

export default VideoPlayer
