import React, { useState } from "react";

function MemoCounter() {
  const [countOne, setCounterOne] = useState(0);
  const [countTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(countOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(countTwo + 1);
  };

  return <div>
    <button onClick={incrementCounterOne}>Count One - {countOne} </button>
    <button onClick={incrementCounterTwo}>Count Two - {countTwo} </button>
  </div>;
}

export default MemoCounter;
