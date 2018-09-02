import Cordinate from './Cordinate';
import Coordinate from './Cordinate';
describe('Cordinate setup', () => {
    test('should accept 2 args x and y in constructor', () => {
        let cordinate1 = new Cordinate(10, 20);
        expect(cordinate1.x).toEqual(10);
        expect(cordinate1.y).toEqual(20);
    });
    test('should throw error when more than 2 cordinates are passed', () => {
        let cordinate1 = () => new Cordinate(10, 20, 30);
        expect(cordinate1).toThrowError();
    });
    test('should set param to 0 if provided without any params', () => {
        let cordinate1 = new Cordinate();
        expect(cordinate1.x).toEqual(0);
        expect(cordinate1.y).toEqual(0);
    });
    test('should set 0 to y if only one param is passed', () => {
        let cordinate1 = new Cordinate(12);
        expect(cordinate1.x).toEqual(12);
        expect(cordinate1.y).toEqual(0);
    })
    test('should return cordinated with curly braces when toString is called', () => {
        let cordinate1 = new Cordinate(10, 20);
        expect(cordinate1.toString()).toEqual(`{10,20}`);
    });
});
fdescribe('Coordinate reduce addition method', () => {
    beforeEach(() => {
        Cordinate.prototype.cordinates = [];
    })
    test('should reduce the array of Coordinates', () => {
        let coordinate1 = new Coordinate(1, 10);
        let coordinate2 = new Coordinate(2, 2);
        let coordinate3 = new Coordinate(3, 3);
        let arr = [coordinate1, coordinate2, coordinate3];
        let newCoordinate = Cordinate.prototype.reduceAddition(arr);
        expect(newCoordinate.x).toEqual(6);
        expect(newCoordinate.y).toEqual(15);
    });
    test('should reduce and sum all the cordinates when no params are passed', () => {
        let coordinate1 = new Coordinate();
        let coordinate2 = new Coordinate(1, 3);
        let coordinate3 = new Coordinate(4, 2);
        let arr = [coordinate1, coordinate2, coordinate3];
        let newCoordinate = Coordinate.prototype.reduceAddition(arr);
        expect(newCoordinate.x).toEqual(5);
        expect(newCoordinate.y).toEqual(5);
    })
})

describe('Override + operator to add Cordinate obj', () => {
    beforeEach(() => {
        Cordinate.prototype.cordinates = [];
    })
  test('should return the added cordinates when Obj is added', () => {
      let point1 = new Cordinate(1, 1);
      let point2 = new Cordinate(2, 2);
      let addedPoint = new Cordinate(point1 + point2);
      expect(addedPoint.x).toEqual(3);
      expect(addedPoint.y).toEqual(3);
  });
  test('should push the cordinate object in prototype', () => {
    let point1 = new Cordinate(1, 1);
    let point2 = new Cordinate(2, 2);
    let addedPoint = new Cordinate(point1 + point2);
    expect(addedPoint.cordinates.length).toEqual(2);
    expect(addedPoint.cordinates[0].x).toEqual(1);
    expect(addedPoint.cordinates[1].y).toEqual(2);
  });
})
