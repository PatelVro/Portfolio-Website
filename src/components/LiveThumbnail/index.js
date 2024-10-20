import React, { useRef, useEffect, useState } from 'react';

const LiveThumbnail = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (video) {
      video.addEventListener('loadeddata', () => {
        // Set the canvas size to match the video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Capture the thumbnail every second
        const interval = setInterval(() => {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnail(canvas.toDataURL('image/png'));
        }, 1000);

        // Clean up on component unmount
        return () => clearInterval(interval);
      });
    }
  }, [videoSrc]);

  return (
    <div>
      <video ref={videoRef} src={videoSrc} autoPlay muted />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {thumbnail && (
        <img src={thumbnail} alt="Live Thumbnail" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default LiveThumbnail;
