// boggle board as example

class Cell {
    constuctor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let getGrid = function () {
    let getRnd = (max = 20) => Math.floor(Math.random() * max);
    let getSize = () => getRnd() + 5; 
    let getDirection = () => '\u2190\u2191\u2192\u2193'[getRnd(4)];
    let width = getSize();
    let height = getSize();
    let grid = new Array();
    
    for(let i = 0; i < width; i++) {
        grid[i] = new Array();
        for(let j = 0; j < height; j++) {
            grid[i][j] = getDirection(); 
        }
    }
    return {
        grid,
        cell,
    };
}

module.exports = {
    test: function() {
        var c = new Cell(4,6);
        console.log(c);
    },
}

