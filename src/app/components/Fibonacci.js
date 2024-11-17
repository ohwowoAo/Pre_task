"use client";

import { useState } from "react";

const Fibonacci = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  function fibonacciCounts(n) {
    if (n === 0) return [1, 0];
    if (n === 1) return [0, 1];

    let previous = [1, 0];
    let current = [0, 1];

    for (let i = 2; i <= n; i++) {
      const next = [previous[0] + current[0], previous[1] + current[1]];
      previous = current;
      current = next;
    }

    return current;
  }

  const handleCalculate = () => {
    const n = parseInt(input, 10);
    if (isNaN(n) || n < 0 || n > 40) {
      setResult("0부터 40 사이의 숫자를 입력하세요.");
      return;
    }
    const [count0, count1] = fibonacciCounts(n);
    setResult(`${n}번째 피보나치 수에서 0 호출: ${count0}, 1 호출: ${count1}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-slate-500">
        피보나치 호출 횟수 계산기
      </h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0 ~ 40 사이의 숫자"
        className="border rounded-lg p-2 mb-4"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        계산하기
      </button>
      {result && (
        <p className="mt-4 text-lg font-medium text-gray-800">{result}</p>
      )}
    </div>
  );
};

export default Fibonacci;
