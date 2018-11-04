import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Count = </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
