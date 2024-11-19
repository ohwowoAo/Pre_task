"use client";
import { useState } from "react";
import DirectUpload from "./DirectUpload"; // 파일 업로드 컴포넌트
import UrlUpload from "./UrlUpload"; // URL 업로드 컴포넌트

/**
 * VideoPlayer 컴포넌트
 * 사용자가 비디오 업로드 방법을 선택할 수 있는 탭을 제공합니다.
 * 파일 선택 탭과 URL 업로드 탭을 통해 비디오 업로드 방식을 선택할 수 있습니다.
 */
const VideoPlayer = () => {
  // 현재 활성화된 탭 상태 (기본값: 'file' 탭)
  const [activeTab, setActiveTab] = useState("file");

  // 탭 목록
  const videoTabs = [
    { key: "file", label: "파일 선택" }, // 파일 선택 탭
    { key: "url", label: "URL 업로드" }, // URL 업로드 탭
  ];

  return (
    <div className="w-2/4 h-2/6">
      {/* 탭 버튼 영역 */}
      <div className="flex my-10 gap-1 items-end flex-wrap w-full">
        {/* videoTabs 배열을 순회하여 각 탭을 동적으로 생성 */}
        {videoTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-2 border rounded-md ${
              activeTab === key // 활성 탭에 따라 스타일 적용
                ? "bg-blue-500 text-white" // 활성화된 탭
                : "bg-white text-black" // 비활성화된 탭
            }`}
            onClick={() => setActiveTab(key)} // 탭 클릭 시 상태 변경
          >
            {label} {/* 탭 이름 표시 */}
          </button>
        ))}
        {/* 탭을 이동할 때 입력된 내용이 초기화된다는 안내 */}
        <p className="ml-3 mb-2 text-slate-600 text-sm">
          * 탭을 이동하면 입력된 내용은 초기화됩니다.
        </p>
      </div>

      {/* 파일 선택 탭이 활성화되면 DirectUpload 컴포넌트 렌더링 */}
      {activeTab === "file" && <DirectUpload />}
      {/* URL 업로드 탭이 활성화되면 UrlUpload 컴포넌트 렌더링 */}
      {activeTab === "url" && <UrlUpload />}
    </div>
  );
};

export default VideoPlayer;
