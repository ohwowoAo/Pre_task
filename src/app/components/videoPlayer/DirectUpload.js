"use client";
import React, { useRef, useState } from "react";

const DirectUpload = () => {
  const [delay, setDelay] = useState(0);
  const [fileName, setFileName] = useState("선택된 파일 없음"); // 표시할 파일명
  const [previousFile, setPreviousFile] = useState(null); // 이전 파일 상태 저장
  const videoRef = useRef(null);

  // 허용된 동영상 확장자 목록
  const allowedExtensions = ["mp4", "avi", "mkv", "mov", "webm"];

  const handleFileInput = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      alert(
        "유효하지 않은 파일입니다. 지원하는 동영상 확장자(mp4, avi, mkv, mov, webm)를 업로드하세요."
      );
      // 이전 파일로 복원
      if (previousFile) {
        event.target.value = null; // 선택된 파일 초기화
        return; // 아무 작업도 하지 않음
      }
      return;
    }

    // 이전 파일 업데이트
    setPreviousFile(file);
    setFileName(file.name); // 파일명 저장
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
        지연 시간: <span className="font-bold">{delay}</span> ms
      </p>
    </div>
  );
};

export default DirectUpload;
