import { formatTime } from "@/utils/formatTime";
import { extractYouTubeVideoID } from "@/utils/urlFileUtils";
import React, { useRef, useState } from "react";

/**
 * 밀리초를 "시간:분:초" 형식으로 변환
 * @param {number} millis - 밀리초 단위의 시간
 * @returns {string} - "시간:분:초" 형식의 문자열
 */

const UrlUpload = () => {
  const urlVideoRef = useRef(null); // iframe 요소 참조
  const [videoUrl, setVideoUrl] = useState(""); // 입력된 YouTube URL 상태
  const [urlDelay, setUrlDelay] = useState(0); // 비디오 로드 지연 시간 상태

  // YouTube 비디오를 iframe에 로드
  const loadVideo = () => {
    const startTime = performance.now(); // 로드 시작 시간 기록
    const videoID = extractYouTubeVideoID(videoUrl); // 유틸 함수 호출

    if (videoID) {
      const videoElement = urlVideoRef.current; // iframe 요소 참조
      videoElement.src = videoID; // iframe의 src 속성 업데이트

      // 비디오 로드 완료 후 지연 시간 계산
      videoElement.onload = () => {
        const endTime = performance.now();
        const delay = Math.round(endTime - startTime); // 지연 시간 계산
        setUrlDelay(delay); // 상태 업데이트
      };
    } else {
      alert("유효하지 않은 YouTube URL입니다."); // 유효하지 않은 URL 경고
      setVideoUrl(""); // 입력 필드 초기화
    }
  };

  return (
    <div className="w-full h-full">
      {/* URL 입력 필드와 불러오기 버튼 */}
      <div className="flex gap-2 mb-4">
        <input
          type="search"
          placeholder="YouTube URL을 입력하세요"
          className="w-full px-3 py-2 border border-slate-300 rounded-md"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)} // URL 변경 시 상태 업데이트
        />
        <button
          onClick={loadVideo} // 불러오기 버튼 클릭 시 비디오 로드
          className="bg-slate-200 text-slate-900 p-2 rounded-md"
        >
          불러오기
        </button>
      </div>

      {/* iframe을 사용하여 비디오 로드 */}
      <div className="w-full h-[500px] relative mb-4">
        <iframe
          ref={urlVideoRef}
          className="w-full h-full border"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        />
      </div>

      {/* 비디오 로딩 지연 시간 표시 */}
      {urlDelay > 0 && (
        <div className="text-slate-900">지연 시간: {formatTime(urlDelay)}</div>
      )}
    </div>
  );
};

export default UrlUpload;
