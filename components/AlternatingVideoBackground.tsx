'use client';

import { useEffect, useRef, useState } from 'react';

interface AlternatingVideoBackgroundProps {
  videos?: string[];
  interval?: number;
}

const CROSSFADE_DURATION = 1500;

export default function AlternatingVideoBackground({
  videos = [],
  interval = 5000,
}: AlternatingVideoBackgroundProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  const [showA, setShowA] = useState(true);

  const currentIndexRef = useRef(0);
  const hiddenIndexRef = useRef(1);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showARef = useRef(true);

  useEffect(() => {
    showARef.current = showA;
  }, [showA]);

  useEffect(() => {
    if (videos.length === 0) return;

    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    currentIndexRef.current = 0;
    hiddenIndexRef.current = videos.length > 1 ? 1 : 0;
    showARef.current = true;
    setShowA(true);

    videoA.src = videos[currentIndexRef.current];
    videoA.load();
    videoA.play().catch(() => {});

    videoB.src = videos[hiddenIndexRef.current];
    videoB.load();

    const getNextIndex = (excludeA: number, excludeB: number) => {
      if (videos.length <= 1) return 0;
      if (videos.length === 2) {
        return [0, 1].find((i) => i !== excludeA && i !== excludeB) ?? excludeA;
      }

      let next = 0;
      do {
        next = Math.floor(Math.random() * videos.length);
      } while (next === excludeA || next === excludeB);

      return next;
    };

    const swapVideos = () => {
      const currentlyShowingA = showARef.current;
      const visibleVideo = currentlyShowingA ? videoA : videoB;
      const hiddenVideo = currentlyShowingA ? videoB : videoA;

      hiddenVideo.currentTime = 0;
      hiddenVideo.play().catch(() => {});

      setShowA(!currentlyShowingA);
      showARef.current = !currentlyShowingA;

      timeoutRef.current = setTimeout(() => {
        visibleVideo.pause();

        const nextHiddenIndex = getNextIndex(
          currentIndexRef.current,
          hiddenIndexRef.current
        );

        currentIndexRef.current = hiddenIndexRef.current;
        hiddenIndexRef.current = nextHiddenIndex;

        visibleVideo.src = videos[nextHiddenIndex];
        visibleVideo.load();
      }, CROSSFADE_DURATION);
    };

    const effectiveInterval = Math.max(interval, CROSSFADE_DURATION + 500);
    intervalRef.current = setInterval(swapVideos, effectiveInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      videoA.pause();
      videoB.pause();
    };
  }, [videos, interval]);

  return (
    <>
      <video
        ref={videoARef}
        className={`fixed inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
          showA ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={videoBRef}
        className={`fixed inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
          showA ? 'opacity-0' : 'opacity-100'
        }`}
        muted
        playsInline
        preload="auto"
      />

      <div className="fixed inset-0 bg-black/60" />
    </>
  );
}