
function makeDeck() {
    var suits = ['spades', 'hearts', 'clubs', 'diamonds' ];
    var faceValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    return suits.reduce(
        (deck, suit) => deck.concat(faceValues.map((fv) => '' + fv + ' of ' + suit)),
        []
    );
}
// console.log(makeDeck())

function flatten(arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}


function shuffle(arr) {
    var len = arr.length,
        toShuffle = arr.slice(0),
        shuffled = [];

    while(len--) {
        shuffled.push(toShuffle.splice(Math.floor(Math.random() * toShuffle.length), 1)[0]);
    }
    return shuffled;
}

function shuffleY(arr) {
    var len = arr.length,
        toShuffle = arr.slice(0),
        tmp,
        rnd;

    while(len) {
        rnd = Math.floor(Math.random() * len--);
        tmp = toShuffle[len];
        toShuffle[len] = toShuffle[rnd];
        toShuffle[rnd] = tmp;
    }
    return toShuffle;
}


module.exports = {
    test: function() {
        console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))
    },
}
