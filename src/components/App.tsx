import * as React from "react";
import { hot } from "react-hot-loader";
import logo from "../assets/svg/logo.svg";

import "./../assets/scss/App.scss";
class App extends React.Component<Record<string, unknown>, undefined> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
