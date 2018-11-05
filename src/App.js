import React, { Component, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const [screen, setScreen] = useState("Counter");
  return (
    <div className="App">
      <header className="App-header">
        {screen === "Todo" && (
          <div>
            <button
              className="w3-button w3-round"
              onClick={() => setScreen("Counter")}
            >
              Counter
            </button>
            <Todo />
          </div>
        )}
        {screen === "Counter" && (
          <div>
            <button
              className="w3-button w3-round"
              onClick={() => setScreen("Todo")}
            >
              Todo
            </button>
            <Counter />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
