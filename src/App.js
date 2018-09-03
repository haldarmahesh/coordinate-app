import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coordinate from './coordinate/Coordinate';

class App extends Component {
  render() {
    const point1 = new Coordinate(1, 1);
    const point2 = new Coordinate(2, 2);
    const addedPoint = new Coordinate(point1 + point2);
    console.log(addedPoint);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
