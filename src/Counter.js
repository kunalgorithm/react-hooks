import React, { useState } from "react";

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button
        className="w3-button w3-round"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
