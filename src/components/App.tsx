import * as React from "react";
import logo from "../assets/svg/logo.svg";
import ReduxButton from "./ReduxButton";

import "../assets/scss/App.scss";

class App extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{ margin: 0 }}>React Starter with Typescript, Redux, Webpack, Sass and Babel.</p>
                    <p>
                        React Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <ReduxButton />
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
