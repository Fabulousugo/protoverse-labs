'use client';

import { useState, useEffect, useRef } from 'react';

interface AlternatingVideoBackgroundProps {
  videos?: string[];
  interval?: number;
}

export default function AlternatingVideoBackground({
  videos = [],
  interval = 5000,
}: AlternatingVideoBackgroundProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [showA, setShowA] = useState(true);
  const activeIndexRef = useRef(0);
  const nextIndexRef = useRef(1);
  const CROSSFADE_DURATION = 1500; // 1.5 seconds overlap

  useEffect(() => {
    if (!videos.length) return;

    if (videoARef.current) {
      videoARef.current.src = videos[0];
      videoARef.current.load();
      videoARef.current.play().catch(() => {});
    }
    if (videoBRef.current) {
      videoBRef.current.src = videos[1] ?? videos[0];
      videoBRef.current.load();
    }
  }, []);

  useEffect(() => {
    if (!videos.length) return;

    const getNextIndex = (exclude: number) => {
      if (videos.length <= 1) return 0;
      let idx;
      do {
        idx = Math.floor(Math.random() * videos.length);
      } while (idx === exclude);
      return idx;
    };

    // Fire CROSSFADE_DURATION ms before the full interval
    const effectiveInterval = interval - CROSSFADE_DURATION;

    const timer = setInterval(() => {
      const currentlyShowingA = showA;

      if (currentlyShowingA) {
        // Start playing B (hidden) and begin crossfade — B fades IN while A fades OUT
        if (videoBRef.current) {
          videoBRef.current.play().catch(() => {});
        }
        setShowA(false); // triggers CSS transition — takes CROSSFADE_DURATION ms

        // After crossfade completes, load next video into A (now hidden)
        const upcoming = getNextIndex(nextIndexRef.current);
        activeIndexRef.current = nextIndexRef.current;
        nextIndexRef.current = upcoming;

        setTimeout(() => {
          if (videoARef.current) {
            videoARef.current.src = videos[upcoming];
            videoARef.current.load();
          }
        }, CROSSFADE_DURATION + 500); // wait for crossfade to fully finish

      } else {
        if (videoARef.current) {
          videoARef.current.play().catch(() => {});
        }
        setShowA(true);

        const upcoming = getNextIndex(activeIndexRef.current);
        activeIndexRef.current = nextIndexRef.current;
        nextIndexRef.current = upcoming;

        setTimeout(() => {
          if (videoBRef.current) {
            videoBRef.current.src = videos[upcoming];
            videoBRef.current.load();
          }
        }, CROSSFADE_DURATION + 500);
      }
    }, effectiveInterval);

    return () => clearInterval(timer);
  }, [showA, videos, interval]);

  return (
    <>
      <video
        ref={videoARef}
        className={`fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-[2000ms] ${
          showA ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="auto"
      />
      <video
        ref={videoBRef}
        className={`fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-[2000ms] ${
          showA ? 'opacity-0' : 'opacity-100'
        }`}
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="fixed inset-0 bg-black/60 z-10" />
    </>
  );
}