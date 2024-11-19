"use client";

import { useState } from "react";
import { calculateFibonacciCalls } from "./FibonacciLogic";

/**
 * Fibonacci 컴포넌트
 * 사용자가 입력한 피보나치 수를 기반으로,
 * 해당 수에서 0과 1의 호출 횟수를 계산하고 결과를 표시하는 컴포넌트입니다.
 */
export default function Fibonacci() {
  const [input, setInput] = useState(""); // 사용자 입력을 위한 상태
  const [result, setResult] = useState(null); // 계산된 결과를 위한 상태

  /**
   * 계산 버튼을 클릭했을 때 실행되는 함수.
   * 사용자 입력값을 검증한 후, 피보나치 호출 횟수를 계산하여 결과를 상태에 저장합니다.
   */
  const handleCalculate = () => {
    const n = parseInt(input, 10); // 입력값을 숫자로 변환
    if (isNaN(n) || n < 0 || n > 40) {
      setResult("0부터 40 사이의 숫자를 입력하세요.");
      return; // 숫자가 유효하지 않으면 함수 종료
    }
    const [count0, count1] = calculateFibonacciCalls(n); // 피보나치 호출 횟수 계산
    setResult(`${n}번째 피보나치 수에서 0 호출: ${count0}, 1 호출: ${count1}`);
  };

  return (
    <div className="h-full flex flex-col items-center my-10">
      <h1 className="text-2xl font-bold mb-4 text-slate-500">
        피보나치 호출 횟수 계산기
      </h1>
      <div className="w-full flex flex-col items-center">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)} // 입력값을 상태에 반영
          placeholder="0 ~ 40 사이의 숫자"
          className="border rounded-lg p-2 mb-4 w-[200px]"
        />
        <button
          onClick={handleCalculate} // 계산하기 버튼 클릭 시 실행
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          계산하기
        </button>
      </div>
      {result && (
        <p className="mt-4 text-lg font-medium text-gray-800">{result}</p> // 결과 출력
      )}
    </div>
  );
}
