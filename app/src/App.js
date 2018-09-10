import React, { Component } from 'react';
import {Button} from "antd";
import logo from './logo.svg';
import './App.css';

console.log(logo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <Button type="primary">src/App.js</Button> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
