import { isValidExtension } from "@/utils/directFileUtils";
import { formatTime } from "@/utils/formatTime";
import React, { useRef, useState } from "react";

const allowedExtensions = ["mp4", "avi", "mkv", "mov", "webm"]; // 지원 확장자 목록

const DirectUpload = () => {
  const [delay, setDelay] = useState(0); // 파일 로드 지연 시간
  const [fileName, setFileName] = useState("선택된 파일 없음"); // 파일 이름
  const videoRef = useRef(null); // 비디오 DOM 참조

  const handleFileInput = async (event) => {
    const file = event.target.files[0]; // 파일 객체 가져오기
    if (!file) return; // 파일이 없으면 함수 종료

    // 확장자가 유효한지 확인
    if (!isValidExtension(file.name, allowedExtensions)) {
      alert(
        "유효하지 않은 파일입니다. 지원하는 동영상 확장자(mp4, avi, mkv, mov, webm)를 업로드하세요."
      );
      return;
    }

    setFileName(file.name); // 파일 이름
    const startTime = performance.now(); // 시작 시간 기록
    const url = URL.createObjectURL(file); // 파일의 URL을 생성
    const videoElement = videoRef.current; // video DOM 요소에 접근

    videoElement.src = url; // 비디오 소스 설정
    videoElement.onloadeddata = () => {
      // 비디오 로드 완료 시
      const endTime = performance.now(); // 종료 시간 기록
      const loadDelay = endTime - startTime; // 지연 시간 계산
      setDelay(loadDelay); // 지연 시간 상태 갱신
      videoElement.play(); // 비디오 재생
    };
  };

  return (
    <div className="w-full h-full">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileInput}
        className="mb-4"
      />
      <p className="mb-2 text-slate-700">파일명: {fileName}</p>
      <video ref={videoRef} controls className="border w-full" />
      <p className="mt-4 text-slate-900">
        지연 시간: <span className="font-bold">{formatTime(delay)}</span>
      </p>
    </div>
  );
};

export default DirectUpload;
