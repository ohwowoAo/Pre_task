"use client";

import { useState } from "react";
import Fibonacci from "./Fibonacci";
import VideoPlayer from "./VideoPlayer";

export default function TabComponent() {
  const [selectedTab, setSelectedTab] = useState("fibonacci"); // 첫 번째 탭을 기본값으로 설정

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex h-[60px] pt-3 gap-1">
        <button
          onClick={() => setSelectedTab("fibonacci")}
          className={`w-[200px] h-full clip-path-[polygon(10%_0,_90%_0,_100%_100%,_0_100%)] rounded-tl-[35px] rounded-tr-[35px] font-bold ${
            selectedTab === "fibonacci"
              ? "bg-white text-[#000] shadow-[3px_0px_0px_rgba(0,0,0,0.1)]"
              : "bg-gray-200 text-slate-400"
          }`}
        >
          Fibonacci
        </button>
        <button
          onClick={() => setSelectedTab("video")}
          className={`w-[200px] h-full clip-path-[polygon(10%_0,_90%_0,_100%_100%,_0_100%)] rounded-tl-[35px] rounded-tr-[35px] font-bold ${
            selectedTab === "video"
              ? "bg-white text-[#000] shadow-[3px_0px_0px_rgba(0,0,0,0.1)]"
              : "bg-gray-200 text-slate-400"
          }`}
        >
          Video
        </button>
      </div>

      {/* 선택된 탭에 따라 내용 렌더링 */}
      <div className="border-t border-slate-300	">
        {selectedTab === "fibonacci" && <Fibonacci />}
        {selectedTab === "video" && <VideoPlayer />}
      </div>
    </div>
  );
}
