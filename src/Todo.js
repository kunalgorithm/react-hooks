import React, { useState } from "react";

export default function Todos() {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    setTodos([...todos, text]);
    e.preventDefault();
    setText("");
  }

  return (
    <div>
      <h2> Todo List </h2>

      <p>Enter a task to complete.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={text}
            onChange={handleChange}
            className="w3-input w3-round w3-border-0"
          />
          <button className="w3-btn w3-round w3-border w3-margin" type="submit">
            Add
          </button>
        </label>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
