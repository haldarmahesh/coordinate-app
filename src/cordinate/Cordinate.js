export default class Coordinate {
  constructor(...args) {
    if (arguments.length > 2) {
      throw new Error('Please pass 2 or less parameters.');
    }

    if (typeof args[0] === 'number') {
      // this.x = args[0];
      // this.y = args[1];
      [this.x, this.y] = args;
    } else if (typeof args[0] === 'undefined') {
      this.x = 0;
      this.y = 0;
    }
    console.log('ARGS', args, typeof args[0]);
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
Coordinate.prototype.reduceAddition = (coordinates) => coordinates
  .reduce((total, nextCoordinate) => {
    Object.assign(total, {
      x: total.x + nextCoordinate.x,
      y: total.y + nextCoordinate.y
    });
    return total;
  }, new Coordinate(0, 0));
