import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCoordinateAdded: false
    };
  }

  handleNewCoordinate() {
    this.setState({
      isCoordinateAdded: true
    });
  }

  handleNewCoordinatePoint() {
    this.setState({});
  }

  renderCoordinate() {
    const { isCoordinateAdded } = this.state;
    return isCoordinateAdded ? 'new Coordinate(..)' : null;
  }

  renderCreateNewPoint() {
    const { isCoordinateAdded } = this.state;
    const component = (
      <div className="row mt-2">
        <div className="col-md-4">
          Add new Coordinate points as argument
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">X</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>
            <div className="col-md-12">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Y</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="new-coordinate-point-button-container">
                <button
                  className="btn btn-warning btn-block"
                  type="button"
                  onClick={() => this.handleNewCoordinatePoint()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return isCoordinateAdded ? component : null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            Start by creating new Coordinate
          </div>
          <div className="col-md-2">
            <div className="new-coordinate-button-container">
              <button
                className="btn btn-primary btn-block"
                type="button"
                onClick={() => this.handleNewCoordinate()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
        {this.renderCreateNewPoint()}
        <div className="row">
          <div className="col-md-8">
            {this.renderCoordinate()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
