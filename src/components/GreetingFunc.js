import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, LocaleContext } from "../context";

export default function GreetingFunc() {
  const name = useFormInput("Henry");
  const email = useFormInput("xuziwei89@gmail.com");

  const theme = useContext(ThemeContext);
  const language = useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(name.value + "   " + email.value);

  return (
    <React.Fragment>
      <div className={theme.themes.dark}>
        <section>
          <h1>Greeting Functional</h1>
          <div>
            <label>Name </label>
            <br />

            <input type="text" {...name} />
          </div>
        </section>
        <section>
          <div>
            <label>Email</label>
            <br />
            <input type="text" {...email} />
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

// Custom hooks, extracted from component.
function useWindowWidth() {
  // register event to browser event
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    // register evenrtListener
    window.addEventListener("resize", handleResize);
    // if return function，it will clean eventListener
    return () => window.removeEventListener("resize", handleResize);
  });

  return width;
}
