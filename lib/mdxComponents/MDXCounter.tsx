"use client";
import React, { useState } from "react";
function MDXCounter() {
  const [counter, setCounter] = useState(0);

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="counter-container">
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      //<button onClick={handleReset}>Reset</button>
      <p>Count: {counter}</p>
    </div>
  );
}
export default MDXCounter;
