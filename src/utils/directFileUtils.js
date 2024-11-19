/**
 * 파일 확장자 검증
 * @param {string} fileName - 파일 이름
 * @param {string[]} allowedExtensions - 허용된 확장자 목록
 * @returns {boolean} - 확장자가 유효하면 true, 아니면 false
 */
export const isValidExtension = (fileName, allowedExtensions) => {
  const fileExtension = fileName.split(".").pop().toLowerCase();
  return allowedExtensions.includes(fileExtension);
};
