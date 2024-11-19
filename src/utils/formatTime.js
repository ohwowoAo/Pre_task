export const formatTime = (ms) => {
  const seconds = Math.floor(ms / 1000); // 초 단위로 변환
  const minutes = Math.floor(seconds / 60); // 분 단위로 변환
  const hours = Math.floor(minutes / 60); // 시간 단위로 변환
  const milliseconds = ms % 1000; // 밀리초 계산

  const formattedHours = String(hours).padStart(2, "0"); // 두 자리로 포맷
  const formattedMinutes = String(minutes % 60).padStart(2, "0"); // 60분 이상일 경우 나머지 처리
  const formattedSeconds = String(seconds % 60).padStart(2, "0"); // 60초 이상일 경우 나머지 처리
  const formattedMilliseconds = String(milliseconds.toFixed(3)).padStart(
    3,
    "0"
  ); // 밀리초 반올림 후 3자리 포맷

  // "시:분:초.밀리초" 형식으로 반환 (시간이 0일 경우 제외)
  return `${
    hours > 0 ? `${formattedHours}:` : ""
  }${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};
