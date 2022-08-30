import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  
  console.log('Use State Render')
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default UseState;
