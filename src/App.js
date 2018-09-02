import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cordinate from './cordinate/Cordinate';

class App extends Component {
  render() {
    let point1 = new Cordinate(1, 1);
    let point2 = new Cordinate(2, 2);
    let addedPoint = new Cordinate(point1 + point2);
    console.log(addedPoint);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
