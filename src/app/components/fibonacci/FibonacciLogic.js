/**
 * 피보나치 수에서 0과 1의 호출 횟수를 계산하는 함수.
 *
 * @param {number} n 피보나치 수열에서 계산할 n번째 인덱스 (0 ~ 40 사이의 숫자)
 * @returns {[number, number]} n번째 피보나치 수에서 0과 1의 호출 횟수
 *
 * 예: n이 5일 경우, 반환값은 [3, 5]로 0은 3번 호출되고, 1은 5번 호출됩니다.
 */
export function calculateFibonacciCalls(n) {
  if (n === 0) return [1, 0]; // n이 0일 때 0 호출 1번, 1 호출 0번
  if (n === 1) return [0, 1]; // n이 1일 때 0 호출 0번, 1 호출 1번

  let previous = [1, 0]; // 이전 피보나치 수 (0, 1)
  let current = [0, 1]; // 현재 피보나치 수 (0, 1)

  for (let i = 2; i <= n; i++) {
    const next = [previous[0] + current[0], previous[1] + current[1]]; // 새로운 피보나치 수 계산
    previous = current; // 현재 수를 이전 수로 설정
    current = next; // 새로운 수를 현재 수로 설정
  }

  return current; // 계산된 0과 1의 호출 횟수 반환
}
