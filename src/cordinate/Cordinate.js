export default class Coordinate {
    constructor(x = 0, y = 0) {
        if(arguments.length > 2) {
            throw new Error('Please pass 2 or less parameters.');
        }

        if (typeof arguments[0] === 'number'){
            this.x = x;
            this.y = y;
        } else if(typeof arguments[0] === 'undefined'){
            this.x = 0;
            this.y = 0;
        }
        console.log('ARGS', arguments, typeof arguments[0]);
    }
    valueOf() {
        Coordinate.prototype.cordinates.push(this);
        return this;
    }
    toString() {
        return `{${this.x},${this.y}}`;
    }
}
Coordinate.prototype.cordinates = [];
Coordinate.prototype.reduceAddition = (coordinates) => {
    return coordinates.reduce((total, nextCoordinate) => {
        total.x += nextCoordinate.x;
        total.y += nextCoordinate.y;
        return total
    }, new Coordinate(0, 0));
}