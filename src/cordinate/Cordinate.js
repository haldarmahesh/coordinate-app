export default class Coordinate {
  constructor(...args) {
    if (args.length > 2) {
      throw new Error('Please pass 2 or less parameters.');
    } else if (args.length === 2) {
      [this.x, this.y] = args;
    } else if (args.length === 1) {
      if (typeof args[0] === 'number') {
        [this.x] = args;
        this.y = 0;
      } else if (typeof args[0] === 'string' && Coordinate.matchesToString(args[0])) {
        const newCoordinate = this.reduceAddition(Coordinate.prototype.cordinates);
        this.x = newCoordinate.x;
        this.y = newCoordinate.y;
      }
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  valueOf() {
    Coordinate.prototype.cordinates.push(this);
    return this;
  }

  toString() {
    return `{${this.x},${this.y}}`;
  }

  static matchesToString(str) {
    const TO_STR_REGEX = /^{.*}$/;
    return TO_STR_REGEX.test(str);
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
