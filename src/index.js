import React from "react";
import ReactDOM from "react-dom";
import GreetingClass from "./components/GreetingClass";
import GreetingFunc from "./components/GreetingFunc";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <GreetingClass />
      <GreetingFunc />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
