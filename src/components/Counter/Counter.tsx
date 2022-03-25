import React, { useState } from "react";

interface CounterProps {}
export const Counter: React.FC<CounterProps> = ({}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col p-10 space-y-5">
      <div className="text-5xl font-bold">Counter</div>
      <div className="flex flex-col items-center space-y-10">
        <button className="btn text-xl" onClick={() => setCount((x) => x + 1)}>
          Increment
        </button>
        <div className="text-3xl font-bold" id="count">
          Count : {count}
        </div>
        <button
          disabled={count === 0}
          className={`btn text-xl ${
            count === 0 ? "opacity-70 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={() => setCount((x) => (x > 0 ? x - 1 : x))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
