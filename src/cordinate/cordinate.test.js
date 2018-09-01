import Cordinate from './Cordinate';
describe('Cordinate setup', () => {
    test('should accept 2 args x and y in constructor', () => {
        let cordinate1 = new Cordinate(10, 20);
        expect(cordinate1.x).toEqual(10);
        expect(cordinate1.y).toEqual(20);
    });
    test('should store the first two params in x and y', () => {
        let cordinate1 = new Cordinate(10, 20, 30);
        expect(cordinate1.x).toEqual(10);
        expect(cordinate1.y).toEqual(20);
    })
    test('should return cordinated with curly braces when toString is called', () => {
        let cordinate1 = new Cordinate(10, 20);
        expect(cordinate1.toString()).toEqual(`{10,20}`);
    })
})