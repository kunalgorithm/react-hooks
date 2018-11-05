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
          <input value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
