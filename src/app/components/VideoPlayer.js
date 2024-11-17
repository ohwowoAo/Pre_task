"use client";
import { useState, useRef } from "react";

const VideoPlayer = () => {
  const [delay, setDelay] = useState(0);
  const videoRef = useRef(null);

  const handleFileInput = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const startTime = performance.now();
    const url = URL.createObjectURL(file);
    const videoElement = videoRef.current;

    videoElement.src = url;
    videoElement.onloadeddata = () => {
      const endTime = performance.now();
      setDelay((endTime - startTime).toFixed(2)); // 지연 시간 계산
      videoElement.play();
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/4	">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileInput}
          className="mb-4"
        />
        <video ref={videoRef} controls className="border w-full" />
        <p className="mt-4 text-slate-900">
          지연 시간: <span className="font-bold">{delay}</span> ms
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
