export default class Coordinate {
    constructor(x = 0, y = 0) {
        if(arguments.length > 2) {
            throw new Error('Please pass 2 or less parameters.');
        }

        this.x = x;
        this.y = y;
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