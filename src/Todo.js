import React, { useState } from "react";

export default function Todos() {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");

  function handleChange(event) {
    this.setText(event.target.value);
  }

  return (
    <div>
      <h2> Todo: </h2>
      <p>Enter a task to complete.</p>
      <form onSubmit={() => this.handleSubmit}>
        <label>
          Enter a task to complete:
          <input
            type="text"
            value={text}
            onChange={() => {
              console.log("stop");
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>text: {text}</h3>
    </div>
  );
}
