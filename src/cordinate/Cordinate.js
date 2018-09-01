export default class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `{${this.x},${this.y}}`;
    }
}