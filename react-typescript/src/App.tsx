import React from "react";
import "./App.css";

function App() {
  const name = "Patty";
  const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>;
  return <div>{greet(name)}</div>;
}

export default App;
