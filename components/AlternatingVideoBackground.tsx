'use client';

import { useState, useEffect } from 'react';

interface AlternatingVideoBackgroundProps {
  videos?: string[];
  interval?: number;
}

export default function AlternatingVideoBackground({ 
  videos = [
    '/Futuristic_African_Child_Astronaut_Video.mp4',
    '/bg2.mp4',
    '/video3.mp4',
    '/video4.mp4',
    '/video5.mp4',
    '/video6.mp4',
    '/video7.mp4',
    '/video homepage.mp4',
  ],
  interval = 10000 // 30 seconds default
}: AlternatingVideoBackgroundProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);

  // Function to get a random video index different from current
  const getRandomVideoIndex = (currentIndex: number) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * videos.length);
    } while (randomIndex === currentIndex && videos.length > 1);
    return randomIndex;
  };

  useEffect(() => {
    // Switch video at specified interval
    const timer = setInterval(() => {
      setCurrentVideo(nextVideo);
      setNextVideo(getRandomVideoIndex(nextVideo));
    }, interval);

    return () => clearInterval(timer);
  }, [nextVideo, interval]);

  return (
    <>
      {/* Render all videos */}
      {videos.map((video, index) => (
        <video
          key={`video-${index}`}
          className={`fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            currentVideo === index ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* Dark overlay for readability - Fixed to viewport */}
      <div className="fixed inset-0 bg-black/60 z-10" />
    </>
  );
}