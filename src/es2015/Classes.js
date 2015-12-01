'use strict';


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}


module.exports = {
    run() {
        let p1 = new Point(10,14);

        console.log('typeof Class is ' + typeof Point);
        console.log(p1);
        console.log(p1 instanceof Point);
        
        let p2 = new Point();
        console.log(p2);
        
        
    },
};
