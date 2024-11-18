"use client";

import { useState } from "react";
import Fibonacci from "./Fibonacci";
import VideoPlayer from "./VideoPlayer";

export default function TabComponent() {
  const [selectedTab, setSelectedTab] = useState("fibonacci"); // 첫 번째 탭을 기본값으로 설정

  return (
    <div className="flex flex-col h-screen">
      {/* 탭 버튼 */}
      <div className="fixed top-0 left-0 flex items-end h-[60px] pt-3 gap-1 border-b border-slate-300 w-full bg-slate-200">
        {["fibonacci", "video"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`w-[200px] h-full clip-path-[polygon(10%_0,_90%_0,_100%_100%,_0_100%)] 
        rounded-tl-[35px] rounded-tr-[35px] border border-slate-300 border-b-0 font-bold 
        ${
          selectedTab === tab
            ? "bg-white text-[#000] shadow-[3px_0px_0px_rgba(0,0,0,0.1)]"
            : "bg-gray-200 text-slate-400"
        }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <p className="ml-3 mb-2 text-slate-600 text-sm">
          * 윈도우 환경 기준으로 최적화되었습니다
        </p>
      </div>

      {/* 선택된 탭에 따라 내용 렌더링 */}
      <div className="mt-[60px] flex-1 overflow-y-auto bg-gray-100">
        {selectedTab === "fibonacci" && <Fibonacci />}
        {selectedTab === "video" && <VideoPlayer />}
      </div>
    </div>
  );
}
