import React, { useRef, useState } from "react";

const UrlUpload = () => {
  const urlVideoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [urlDelay, setUrlDelay] = useState(0);
  const [urlError, setUrlError] = useState(null);

  const extractYouTubeVideoID = (url) => {
    const videoIDPattern =
      /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|embed\/|shorts\/|watch\?.*?&v=|shorts\/)?([a-zA-Z0-9_-]{11})/;
    const shortVideoIDPattern =
      /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/;

    const youtubeMatch = url.match(videoIDPattern);
    const shortMatch = url.match(shortVideoIDPattern);

    if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

    return null;
  };

  const loadVideo = () => {
    const startTime = performance.now();
    const videoID = extractYouTubeVideoID(videoUrl);
    if (videoID) {
      const videoElement = urlVideoRef.current;
      videoElement.src = videoID;

      videoElement.onload = () => {
        const endTime = performance.now();
        const loadDelay = Math.round(endTime - startTime);
        setUrlDelay(loadDelay);
        setUrlError(null);
      };
    } else {
      alert("유효하지 않은 YouTube URL입니다.");
      setVideoUrl("");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="YouTube URL을 입력하세요"
          className="w-full px-3"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          onClick={loadVideo}
          className="text-slate-900 bg-slate-200 break-keep	rounded-md p-2"
        >
          불러오기
        </button>
      </div>
      <div className="my-4 w-full h-full relative">
        <iframe
          ref={urlVideoRef}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {urlDelay > 0 && (
        <div className="text-slate-900">
          비디오 로딩 지연 시간: {urlDelay}ms
        </div>
      )}
    </div>
  );
};

export default UrlUpload;
