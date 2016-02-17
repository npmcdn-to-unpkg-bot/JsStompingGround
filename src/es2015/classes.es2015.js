import {log} from '../utils';


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

log('typeof Point is ' + typeof Point);

let p1 = new Point(10,14);
log(p1);
log(`Is instanceof Point? ${p1 instanceof Point}`);
