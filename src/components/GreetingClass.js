import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, LocaleContext } from "../context";

export default class GreetingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "henry",
      email: "xuziwei89@gmail.com",
      width: window.innerWidth
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + "   " + this.state.email;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + "   " + this.state.email;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    console.log("resize");
    this.setState({
      width: window.innerWidth
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <div className={theme.themes.light}>
              <h1>Greeting Class</h1>
              <section>
                <label>Name</label>
                <br />
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </section>

              <section>
                <label>Email</label>
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </section>

              <LocaleContext.Consumer>
                {language => (
                  <section>
                    <label>Language</label>
                    <br />
                    <input type="text" value={language.language} disabled />
                  </section>
                )}
              </LocaleContext.Consumer>

              <section>
                <label>Width</label>
                <br />
                <input type="text" value={this.state.width + "px"} />
              </section>
            </div>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}
