import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.scss';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>
              <li><Link to="/demo/asdfwoefasnf?id=123123123">demo</Link></li>
            </ul>
            <Route path="/demo/:id" component={Demo}></Route>
          </header>
        </div>
      </Router>
    );
  }
}

const Demo = ({ match, location }) => {
  return (
    <h1>{match.params.id}{location.search}</h1>
  )
}

export default App;
