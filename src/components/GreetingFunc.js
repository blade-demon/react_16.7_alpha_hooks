import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, LocaleContext } from "../context";

export default function GreetingFunc() {
  const [name, setName] = useState("Henry");
  const [email, setEmail] = useState("xuziwei89@gmail.com");
  const theme = useContext(ThemeContext);
  const language = useContext(LocaleContext);

  useEffect(() => {
    document.title = name + "   " + email;
  });

  // register event to browser event
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    // register evenrtListener
    window.addEventListener("resize", handleResize);
    // if return function，it will clean eventListener
    return () => window.removeEventListener("resize", handleResize);
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <React.Fragment>
      <div className={theme.themes.dark}>
        <section>
          <h1>Greeting Functional</h1>
          <div>
            <label>Name </label>
            <br />
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
        </section>
        <section>
          <div>
            <label>Email</label>
            <br />
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
        </section>
        <section>
          <div>
            <label>Language</label>
            <br />
            <input type="text" value={language.language} />
          </div>
        </section>
        <section>
          <div>
            <label>Width</label>
            <br />
            <input type="text" value={width + "px"} />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
