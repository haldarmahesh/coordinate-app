import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCoordinateAdded: false,
      x: null,
      y: null
    };
  }

  handleNewCoordinate() {
    this.setState({
      isCoordinateAdded: true
    });
  }

  handleChangeCoordinatePoint(event, type) {
    this.setState({
      [type]: event.currentTarget.value
    });
  }

  handleAddNewCoordinatePoint() {
    this.setState();
  }

  renderCoordinate() {
    const { isCoordinateAdded } = this.state;
    return isCoordinateAdded ? 'new Coordinate(..)' : null;
  }

  renderCreateNewPoint() {
    const { isCoordinateAdded, x, y } = this.state;
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
                <input defaultValue={x} onChange={(event) => this.handleChangeCoordinatePoint(event, 'x')} type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Y</span>
                </div>
                <input type="text" defaultValue={y} onChange={(event) => this.handleChangeCoordinatePoint(event, 'y')} className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="new-coordinate-point-button-container">
                <button
                  className="btn btn-warning btn-block"
                  type="button"
                  onClick={() => this.handleAddNewCoordinatePoint()}
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
    console.log('this', this);
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
