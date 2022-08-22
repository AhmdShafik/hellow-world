import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevStat) => prevStat + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementByFive}>Increment by five</button>
    </div>
  );
}

export default HookCounterTwo;
