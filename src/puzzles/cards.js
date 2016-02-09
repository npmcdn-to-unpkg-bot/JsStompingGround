import {log} from '../utils';


var suits = ['spades', 'hearts', 'clubs', 'diamonds' ];
var faceValues = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'jack', 'queen', 'king', 'ace',
];

const deck = suits.reduce((deck, suit) => {
  faceValues.forEach(val => deck.push(`${val} of ${suit}`));
  return deck;
}, []);

log('Deck: ', deck);
