import Cordinate from './Cordinate';

describe('Cordinate setup', () => {
  const arugmentErr = 'Argument error, please provide valid params';
  test('should accept 2 args x and y in constructor', () => {
    const cordinate1 = new Cordinate(10, 20);
    expect(cordinate1.x).toEqual(10);
    expect(cordinate1.y).toEqual(20);
  });
  test('should throw error when more than 2 cordinates are passed', () => {
    const cordinate1 = () => new Cordinate(10, 20, 30);
    expect(cordinate1).toThrowError();
  });
  test('should set param to 0 if provided without any params', () => {
    const cordinate1 = new Cordinate();
    expect(cordinate1.x).toEqual(0);
    expect(cordinate1.y).toEqual(0);
  });
  test('should set 0 to y if only one param is passed', () => {
    const cordinate1 = new Cordinate(12);
    expect(cordinate1.x).toEqual(12);
    expect(cordinate1.y).toEqual(0);
  });
  test('should return cordinated with curly braces when toString is called', () => {
    const cordinate1 = new Cordinate(10, 20);
    expect(cordinate1.toString()).toEqual('{10,20}');
  });
  test('should throw error when invalid string arguments is passed', () => {
    const cordinate1 = () => new Cordinate('asdasd');
    expect(cordinate1).toThrowError(arugmentErr);
  });
  test('should throw error when invalid arguments, array is passed', () => {
    const cordinate1 = () => new Cordinate([23, 45]);
    expect(cordinate1).toThrowError(arugmentErr);
  });
  test('should throw error when invalid arguments, array and string is passed', () => {
    const cordinate1 = () => new Cordinate([23, 45], 'asdas');
    expect(cordinate1).toThrowError(arugmentErr);
  });
});

describe('Coordinate reduce addition method', () => {
  beforeEach(() => {
    Cordinate.prototype.cordinates = [];
  });
  test('should reduce the array of Coordinates', () => {
    const coordinate1 = new Cordinate(1, 10);
    const coordinate2 = new Cordinate(2, 2);
    const coordinate3 = new Cordinate(3, 3);
    const arr = [coordinate1, coordinate2, coordinate3];
    const newCoordinate = Cordinate.prototype.reduceAddition(arr);
    expect(newCoordinate.x).toEqual(6);
    expect(newCoordinate.y).toEqual(15);
  });
  test('should reduce and sum all the cordinates when no params are passed', () => {
    const coordinate1 = new Cordinate();
    const coordinate2 = new Cordinate(1, 3);
    const coordinate3 = new Cordinate(4, 2);
    const arr = [coordinate1, coordinate2, coordinate3];
    const newCoordinate = Cordinate.prototype.reduceAddition(arr);
    expect(newCoordinate.x).toEqual(5);
    expect(newCoordinate.y).toEqual(5);
  });
});

describe('Override + operator to add Cordinate obj', () => {
  beforeEach(() => {
    Cordinate.prototype.cordinates = [];
  });
  test('should return the added cordinates when Obj is added', () => {
    const point1 = new Cordinate(1, 1);
    const point2 = new Cordinate(2, 2);
    const addedPoint = new Cordinate(point1 + point2);
    expect(addedPoint.x).toEqual(3);
    expect(addedPoint.y).toEqual(3);
  });
  test('should push the cordinate object in prototype', () => {
    const point1 = new Cordinate(1, 1);
    const point2 = new Cordinate(2, 2);
    const addedPoint = new Cordinate(point1 + point2);
    expect(addedPoint.cordinates.length).toEqual(2);
    expect(addedPoint.cordinates[0].x).toEqual(1);
    expect(addedPoint.cordinates[1].y).toEqual(2);
  });
  test('should return the added cordinates when Obj is added', () => {
    const point1 = new Cordinate(1, 1);
    const point2 = new Cordinate(2, 2);
    const point3 = new Cordinate(3, 3);
    const addedPoint = new Cordinate(point1 + point2 + point3);
    expect(addedPoint.x).toEqual(6);
    expect(addedPoint.y).toEqual(6);
  });
  test('should return the added cordinates when Obj is added', () => {
    const addedPoint = new Cordinate(new Cordinate(10, 2) + new Cordinate(2, 1)
      + new Cordinate(3, 4));
    expect(addedPoint.x).toEqual(15);
    expect(addedPoint.y).toEqual(7);
  });
  test('should return the added cordinates in str format when Obj is added and toStr is called', () => {
    const addedPoint = new Cordinate(new Cordinate(10, 2) + new Cordinate(2, 1)
      + new Cordinate(3, 4));
    expect(addedPoint.toString()).toEqual('{15,7}');
  });
});
describe('Static method matcher', () => {
  test('should return true when correct this Obj toString is passed', () => {
    const validToString = '{12,23}';
    expect(Cordinate.matchesToString(validToString)).toEqual(true);
  });
  test('should return false when wrong this Obj toString is passed', () => {
    const invalid = 'asdasdasda';
    expect(Cordinate.matchesToString(invalid)).toEqual(false);
  });
});
