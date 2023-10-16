import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  };

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isCounting]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setIsCounting(!isCounting)}>
        {isCounting ? "Pause" : "Play"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
