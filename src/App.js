import React, { Component, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const [screen, setScreen] = useState("Todo");
  return (
    <div className="App">
      <header className="App-header">
        {screen === "Todo" && (
          <div>
            <Todo />
            <button
              className="w3-button w3-round w3-small"
              onClick={() => setScreen("Counter")}
            >
              Counter Example
            </button>
          </div>
        )}
        {screen === "Counter" && (
          <div>
            <Counter />
            <hr />
            <button
              className="w3-button w3-round w3-small"
              onClick={() => setScreen("Todo")}
            >
              Todo Example
            </button>
          </div>
        )}
        <hr />
        <small>
          Built with{" "}
          <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>{" "}
          API proposal. View source on{" "}
          <a href="https://github.com/kunalgorithm/react-hooks">Github</a>
        </small>
      </header>
    </div>
  );
}

export default App;
