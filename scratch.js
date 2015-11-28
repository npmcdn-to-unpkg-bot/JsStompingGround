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


function flatten (arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}



module.exports = {
    test: function() {
        
        // deck = suits.forEach((suit) => faceVlues.forEach((faceValue) => '' + faceValue + ' of ' + suit));
        // console.log(deck);
        console.log(flatten(['ace', [2,3, 4]]))
        
    },
}
