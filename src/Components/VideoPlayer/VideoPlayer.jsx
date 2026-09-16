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
      if (playState && videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play().catch(err => console.log('Autoplay play error:', err));
      } else if (!playState && videoRef.current) {
        videoRef.current.pause();
      }
    }, [playState]);

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video ref={videoRef} src="/ces-video.mp4" controls preload="auto"></video>
    </div>
  )
}

export default VideoPlayer
