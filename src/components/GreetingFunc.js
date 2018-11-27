import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, LocaleContext } from "../context";

export default function GreetingFunc() {
  const [name, setName] = useState("Henry");
  const [email, setEmail] = useState("xuziwei89@gmail.com");

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <React.Fragment>
      <h1>Greeting Functional</h1>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label>Email: </label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
    </React.Fragment>
  );
}
