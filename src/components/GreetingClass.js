import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, LocaleContext } from "../context";

export default class GreetingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "henry",
      email: "xuziwei89@gmail.com"
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
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
        <h1>Greeting class</h1>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
      </React.Fragment>
    );
  }
}
