import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component setup', () => {
  test('should start with false CoordinateAdded', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
  });
  test('should start with null Coordinates values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isCoordinateAdded).toEqual(false);
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
});
