export default class Cordinate {
  constructor(...args) {
    const ARG_ERROR = 'Argument error, please provide valid params';
    const EXTRA_ARG_ERROR = 'Please pass 2 or less parameters.';
    if (args.length > 2) {
      throw new Error(EXTRA_ARG_ERROR);
    } else if (args.length === 2) {
      if (typeof args[0] === 'number' && typeof args[1] === 'number') {
        [this.x, this.y] = args;
      } else {
        throw new Error(ARG_ERROR);
      }
    } else if (args.length === 1) {
      if (typeof args[0] === 'number') {
        [this.x] = args;
        this.y = 0;
      } else if (typeof args[0] === 'string' && Cordinate.matchesToString(args[0])) {
        const newCoordinate = this.reduceAddition(Cordinate.prototype.cordinates);
        this.x = newCoordinate.x;
        this.y = newCoordinate.y;
      } else {
        throw new Error(ARG_ERROR);
      }
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  valueOf() {
    Cordinate.prototype.cordinates.push(this);
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
Cordinate.prototype.cordinates = [];
Cordinate.prototype.reduceAddition = (coordinates) => coordinates
  .reduce((total, nextCoordinate) => {
    Object.assign(total, {
      x: total.x + nextCoordinate.x,
      y: total.y + nextCoordinate.y
    });
    return total;
  }, new Cordinate(0, 0));
