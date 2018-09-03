import Coordinate from './Coordinate';

describe('Coordinate setup', () => {
  const arugmentErr = 'Argument error, please provide valid params';
  test('should accept 2 args x and y in constructor', () => {
    const coordinate1 = new Coordinate(10, 20);
    expect(coordinate1.x).toEqual(10);
    expect(coordinate1.y).toEqual(20);
  });
  test('should throw error when more than 2 coordinates are passed', () => {
    const coordinate1 = () => new Coordinate(10, 20, 30);
    expect(coordinate1).toThrowError();
  });
  test('should set param to 0 if provided without any params', () => {
    const coordinate1 = new Coordinate();
    expect(coordinate1.x).toEqual(0);
    expect(coordinate1.y).toEqual(0);
  });
  test('should set 0 to y if only one param is passed', () => {
    const coordinate1 = new Coordinate(12);
    expect(coordinate1.x).toEqual(12);
    expect(coordinate1.y).toEqual(0);
  });
  test('should return coordinated with curly braces when toString is called', () => {
    const coordinate1 = new Coordinate(10, 20);
    expect(coordinate1.toString()).toEqual('{10,20}');
  });
  test('should throw error when invalid string arguments is passed', () => {
    const coordinate1 = () => new Coordinate('asdasd');
    expect(coordinate1).toThrowError(arugmentErr);
  });
  test('should throw error when invalid arguments, array is passed', () => {
    const coordinate1 = () => new Coordinate([23, 45]);
    expect(coordinate1).toThrowError(arugmentErr);
  });
  test('should throw error when invalid arguments, array and string is passed', () => {
    const coordinate1 = () => new Coordinate([23, 45], 'asdas');
    expect(coordinate1).toThrowError(arugmentErr);
  });
});

describe('Coordinate reduce addition method', () => {
  beforeEach(() => {
    Coordinate.prototype.coordinates = [];
  });
  test('should reduce the array of Coordinates', () => {
    const coordinate1 = new Coordinate(1, 10);
    const coordinate2 = new Coordinate(2, 2);
    const coordinate3 = new Coordinate(3, 3);
    const arr = [coordinate1, coordinate2, coordinate3];
    const newCoordinate = Coordinate.prototype.reduceAddition(arr);
    expect(newCoordinate.x).toEqual(6);
    expect(newCoordinate.y).toEqual(15);
  });
  test('should reduce and sum all the coordinates when no params are passed', () => {
    const coordinate1 = new Coordinate();
    const coordinate2 = new Coordinate(1, 3);
    const coordinate3 = new Coordinate(4, 2);
    const arr = [coordinate1, coordinate2, coordinate3];
    const newCoordinate = Coordinate.prototype.reduceAddition(arr);
    expect(newCoordinate.x).toEqual(5);
    expect(newCoordinate.y).toEqual(5);
  });
});

describe('Override + operator to add Coordinate obj', () => {
  beforeEach(() => {
    Coordinate.prototype.coordinates = [];
  });
  test('should return the added coordinates when Obj is added', () => {
    const point1 = new Coordinate(1, 1);
    const point2 = new Coordinate(2, 2);
    const addedPoint = new Coordinate(point1 + point2);
    expect(addedPoint.x).toEqual(3);
    expect(addedPoint.y).toEqual(3);
  });
  test('should push the coordinate object in prototype', () => {
    const point1 = new Coordinate(1, 1);
    const point2 = new Coordinate(2, 2);
    const addedPoint = new Coordinate(point1 + point2);
    expect(addedPoint.coordinates.length).toEqual(0);
    expect(addedPoint.x).toEqual(3);
    expect(addedPoint.y).toEqual(3);
  });
  test('should return the added coordinates when Obj is added', () => {
    const point1 = new Coordinate(1, 1);
    const point2 = new Coordinate(2, 2);
    const point3 = new Coordinate(3, 3);
    const addedPoint = new Coordinate(point1 + point2 + point3);
    expect(addedPoint.x).toEqual(6);
    expect(addedPoint.y).toEqual(6);
  });
  test('should return the added coordinates when Obj is added', () => {
    const addedPoint = new Coordinate(new Coordinate(10, 2) + new Coordinate(2, 1)
      + new Coordinate(3, 4));
    expect(addedPoint.x).toEqual(15);
    expect(addedPoint.y).toEqual(7);
  });
  test('should return the added coordinates in str format when Obj is added and toStr is called', () => {
    const addedPoint = new Coordinate(new Coordinate(10, 2) + new Coordinate(2, 1)
      + new Coordinate(3, 4));
    expect(addedPoint.toString()).toEqual('{15,7}');
  });
  test('should calculate addition for different set of coordinate obj', () => {
    const point1 = new Coordinate(3, 4);
    const point2 = new Coordinate(4, 2);
    const point3 = new Coordinate(5, 1);
    const addedPoint1 = new Coordinate(point1 + point2 + point3);
    const addedPoint2 = new Coordinate(point1 + point2);
    expect(addedPoint1.x).toEqual(12);
    expect(addedPoint1.y).toEqual(7);

    expect(addedPoint2.x).toEqual(7);
    expect(addedPoint2.y).toEqual(6);
  });
  test('should return the string format of values when tostring is called after addition', () => {
    const point1 = new Coordinate(3, 4);
    const point2 = new Coordinate(4, 2);
    const point3 = new Coordinate(5, 1);
    const addedPoint1 = new Coordinate(point1 + point2 + point3);
    const addedPoint2 = new Coordinate(point1 + point2);
    expect(addedPoint1.toString()).toEqual('{12,7}');
    expect(addedPoint2.toString()).toEqual('{7,6}');
  });
});
describe('Static method matcher', () => {
  test('should return true when correct this Obj toString is passed', () => {
    const validToString = '{12,23}';
    expect(Coordinate.matchesToString(validToString)).toEqual(true);
  });
  test('should return false when wrong this Obj toString is passed', () => {
    const invalid = 'asdasdasda';
    expect(Coordinate.matchesToString(invalid)).toEqual(false);
  });
});
