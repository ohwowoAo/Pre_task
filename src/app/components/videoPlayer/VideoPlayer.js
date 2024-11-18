"use client";
import { useState } from "react";
import DirectUpload from "./DirectUpload";
import UrlUpload from "./UrlUpload";

const VideoPlayer = () => {
  const [activeTab, setActiveTab] = useState("file"); // 현재 활성화된 탭

  const videoTabs = [
    { key: "file", label: "파일 선택" },
    { key: "url", label: "URL 업로드" },
  ];

  return (
    <div className="w-2/4 h-2/6">
      {/* 탭 버튼 */}
      <div className="flex my-10 gap-1">
        {videoTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-2 border rounded-md	${
              activeTab === key
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* 직접 업로드 탭 */}
      {activeTab === "file" && <DirectUpload />}
      {/* URL 업로드 탭 */}
      {activeTab === "url" && <UrlUpload />}
    </div>
  );
};

export default VideoPlayer;
