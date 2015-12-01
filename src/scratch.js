// var suits = ['spades', 'hearts', 'clubs', 'diamonds' ];
// var faceValues = [
//     '2', '3', '4', '5', '6', '7', '8', '9', '10',
//     'jack', 'queen', 'king', 'ace',
// ];

// var deck = (function() {
//     return suits.map(comb)
// })()

// function comb(suit, faceValues) {
//     return faceValues.map((fv) => '' + fv + ' of ' + suit);
// }


// function flatten (arr) {
//     return arr.reduce(function(flat, toFlatten) {
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// }
// console.log(flatten(['ace', [2,3, 4]]))

function crunch(str) {
    var toCompress = str,
        compressed = '',
        currentChar = '',
        currentCount = 0,
        i = 0;
    if(typeof toCompress !== 'string') {
        throw Error('Input must be of type string.');
    }

    for(; i < toCompress.length; i++) {

        if(toCompress[i] == currentChar) {
            currentCount++;
        } else {
            // output last char based on count
            switch(currentCount) {
                case 0:
                    // do nothing
                    break;
                case 1:
                    compressed = compressed + currentChar;
                    break;
                case 2:
                    compressed = compressed + currentChar + currentChar;
                    break;
                default:
                    compressed = compressed + currentChar + currentCount;
            }

            // reset for new char
            currentChar = toCompress[i];
            currentCount = 1;
        }
    }
    return compressed;
}

module.exports = {
    test: function() {

        console.log(crunch('aaaabbbcCCcccdeeeffggggggggggGGgghiiII'))


    },
}
