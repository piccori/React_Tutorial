import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const CountUp = () => {
    setCount(count + 1);
  };

  const CountDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={CountUp}>+</button>
      <button onClick={CountDown}>-</button>
    </div>
  );
};
