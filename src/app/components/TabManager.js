"use client";

import { useState } from "react";
import Fibonacci from "./fibonacci/Fibonacci";
import VideoPlayer from "./videoPlayer/VideoPlayer";

/**
 * TabComponent 컴포넌트
 * 사용자가 선택한 탭에 따라 다른 콘텐츠를 표시하는 컴포넌트입니다.
 * 기본적으로 피보나치 탭이 선택된 상태로 렌더링됩니다.
 */
export default function TabComponent() {
  // 선택된 탭을 저장하는 상태 (기본값: 'fibonacci' 탭)
  const [selectedTab, setSelectedTab] = useState("fibonacci");

  // 탭 목록
  const categoryTabs = ["fibonacci", "video"];

  return (
    <div className="flex flex-col h-screen">
      {/* 탭 버튼 영역 */}
      <div className="fixed top-0 left-0 flex items-end h-[60px] pt-3 gap-1 border-b border-slate-300 w-full bg-slate-200">
        {/* 각 탭을 동적으로 생성 */}
        {categoryTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)} // 탭 클릭 시 선택된 탭 상태 변경
            className={`w-[200px] h-full clip-path-[polygon(10%_0,_90%_0,_100%_100%,_0_100%)] 
            rounded-tl-[35px] rounded-tr-[35px] border border-slate-300 border-b-0 font-bold 
            ${
              selectedTab === tab
                ? "bg-white text-[#000] shadow-[3px_0px_0px_rgba(0,0,0,0.1)]" // 선택된 탭 스타일
                : "bg-gray-200 text-slate-400" // 선택되지 않은 탭 스타일
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
            {/* 탭 이름의 첫 글자를 대문자로 변환하여 표시 */}
          </button>
        ))}
        {/* 윈도우 환경 최적화에 대한 설명 */}
        <p className="ml-3 mb-2 text-slate-600 text-sm">
          * 윈도우 환경 기준으로 최적화되었습니다
        </p>
      </div>

      {/* 선택된 탭에 따라 콘텐츠 렌더링 */}
      <div className="mt-[60px] flex flex-1 overflow-y-auto bg-gray-100 justify-center">
        {/* 'fibonacci' 탭을 선택하면 Fibonacci 컴포넌트를 렌더링 */}
        {selectedTab === "fibonacci" && <Fibonacci />}
        {/* 'video' 탭을 선택하면 VideoPlayer 컴포넌트를 렌더링 */}
        {selectedTab === "video" && <VideoPlayer />}
      </div>
    </div>
  );
}
