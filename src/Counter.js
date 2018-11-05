import React, { useState } from "react";

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>The count is currently {count}.</p>
      <button
        className="w3-button w3-round w3-border "
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        className="w3-button w3-round w3-border "
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}
