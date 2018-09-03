import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Coordinate from './coordinate/Coordinate';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component setup', () => {
  test('should start with false CoordinateAdded and empty executeResult', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
    expect(wrapper.state().executeResult.length).toEqual(0);
  });
  test('should start with null Coordinates values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
    expect(wrapper.state().x).toEqual(null);
    expect(wrapper.state().y).toEqual(null);
  });
  test('should start empty array of coordinatesArr', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
    expect(wrapper.state().coordinatesArr.length).toEqual(0);
  });
  test('should push in arr when handleAddnew is called and reset other values', () => {
    const wrapper = shallow(<App />);
    const fakeEvent = {
      currentTarget: {
        value: 34
      }
    };
    const fakeEvent2 = {
      currentTarget: {
        value: 12
      }
    };
    wrapper.instance().handleNewCoordinate();
    expect(wrapper.state().isCoordinateAdded).toEqual(true); //
    expect(wrapper.state().coordinatesArr.length).toEqual(0);
    expect(wrapper.state().x).toEqual(null);
    expect(wrapper.state().y).toEqual(null);


    wrapper.instance().handleChangeCoordinatePoint(fakeEvent, 'x');
    wrapper.instance().handleChangeCoordinatePoint(fakeEvent2, 'y');
    expect(wrapper.state().x).toEqual(34);
    expect(wrapper.state().y).toEqual(12);
    wrapper.instance().handleAddNewCoordinatePoint();
    expect(wrapper.state().isCoordinateAdded).toEqual(true);
    expect(wrapper.state().coordinatesArr.length).toEqual(1);
    expect(wrapper.state().x).toEqual(null);
    expect(wrapper.state().y).toEqual(null);
  });
  test('should update the value in x and y on change', () => {
    const fakeEvent = {
      currentTarget: {
        value: 34
      }
    };
    const fakeEvent2 = {
      currentTarget: {
        value: 12
      }
    };
    const wrapper = shallow(<App />);
    expect(wrapper.state().x).toEqual(null);
    expect(wrapper.state().y).toEqual(null);
    wrapper.instance().handleChangeCoordinatePoint(fakeEvent, 'x');
    wrapper.instance().handleChangeCoordinatePoint(fakeEvent2, 'y');
    expect(wrapper.state().x).toEqual(34);
    expect(wrapper.state().y).toEqual(12);
  });
  test('should update the value in x and y on change if event passes string format', () => {
    const fakeEvent = {
      currentTarget: {
        value: '34'
      }
    };
    const fakeEvent2 = {
      currentTarget: {
        value: '12'
      }
    };
    const wrapper = shallow(<App />);
    expect(wrapper.state().x).toEqual(null);
    expect(wrapper.state().y).toEqual(null);
    wrapper.instance().handleChangeCoordinatePoint(fakeEvent, 'x');
    wrapper.instance().handleChangeCoordinatePoint(fakeEvent2, 'y');
    expect(wrapper.state().x).toEqual(34);
    expect(wrapper.state().y).toEqual(12);
  });
  test('should return null when isCoordinate is false and renderCoordinte is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().renderCoordinate()).toEqual(null);
  });
  test('should return some text when isCoordinate is true and renderCoordinte is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      isCoordinateAdded: true
    });
    expect(typeof wrapper.instance().renderCoordinate()).toEqual('string');
  });
  test('should set the state value isCoordinateAdded to true when handle is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
    wrapper.instance().handleNewCoordinate();
    expect(wrapper.state().isCoordinateAdded).toEqual(true);
  });
  test('should return null when renderCreateNew is called when coordinate is not added', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().renderCreateNewPoint()).toEqual(null);
  });
  test('should return object when renderCreateNew is called when coordinate is added', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleNewCoordinate();
    expect(typeof wrapper.instance().renderCreateNewPoint()).toEqual('object');
  });
  test('should return null when renderExexute button is called, given no coordinate is added', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().renderExecuteButton()).toEqual(null);
  });
  test('should return null when renderExexute button is called, given one coordinate is added', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleNewCoordinate();
    const point1 = new Coordinate(2, 3);
    wrapper.setState({
      coordinatesArr: [point1]
    });
    expect(wrapper.instance().renderExecuteButton()).toEqual(null);
  });
  test('should return object when renderExexute button is called, given min 2 coordinates are added', () => {
    const wrapper = shallow(<App />);
    const point1 = new Coordinate(2, 3);
    const point2 = new Coordinate(3, 4);
    wrapper.setState({
      coordinatesArr: [point1, point2]
    });

    expect(typeof wrapper.instance().renderExecuteButton()).toEqual('object');
  });

  test('should return null when renderCoordinateStrParams when no coordinate is added', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().renderCoordinateStrParams()).toEqual(null);
  });
  test('should return object when renderCoordinateStrParams when a coordinate is added', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleNewCoordinate();
    expect(typeof wrapper.instance().renderCoordinateStrParams()).toEqual('object');
  });

  test('should return reduced string from the objects ', () => {
    const wrapper = shallow(<App />);
    const point1 = new Coordinate(2, 3);
    const point2 = new Coordinate(3, 4);
    wrapper.setState({
      coordinatesArr: [point1, point2]
    });
    expect(typeof wrapper.instance().reduceArgsToString()).toEqual('string');
  });

  test('should return null when renderShowResult is called and nothing is in executeresul', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().renderShowResult()).toEqual(null);
  });
  test('should return object when renderShowResult is called and there is a message', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      executeResult: '{12,23'
    });
    expect(typeof wrapper.instance().renderShowResult()).toEqual('object');
  });
  test('should update the state executeResult when handleExecute is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().executeResult.length).toEqual(0);
    wrapper.setState({
      coordinatesArr: [new Coordinate(1, 2), new Coordinate(3, 4)]
    });

    wrapper.instance().handleExecute();
    expect(wrapper.state().executeResult.length > 0).toEqual(true);
  });
});
