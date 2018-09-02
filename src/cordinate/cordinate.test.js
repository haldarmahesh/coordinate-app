import Cordinate from './Cordinate';
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
    expect(addedPoint.__proto__.cordinates.length).toEqual(2);
    expect(addedPoint.__proto__.cordinates[0].x).toEqual(1);
    expect(addedPoint.__proto__.cordinates[1].y).toEqual(2);
  })
})
