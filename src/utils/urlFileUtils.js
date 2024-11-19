/**
 * 유튜브 URL에서 비디오 ID를 추출하고 iframe URL로 변환
 * @param {string} url - 입력된 YouTube URL
 * @returns {string | null} - 유효한 iframe URL 또는 null
 */
export const extractYouTubeVideoID = (url) => {
  const videoIDPattern =
    /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|embed\/|shorts\/|watch\?.*?&v=|shorts\/)?([a-zA-Z0-9_-]{11})/;
  const shortVideoIDPattern = /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/;

  const youtubeMatch = url.match(videoIDPattern);
  const shortMatch = url.match(shortVideoIDPattern);

  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  // 유효하지 않은 경우 null 반환
  return null;
};
