import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            <Link to="/sobre">Ir para página sobre</Link>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  
  }

}

export default App;
