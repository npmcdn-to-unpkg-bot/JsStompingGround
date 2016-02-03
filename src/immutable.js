import immutable, {Map, List, fromJS} from 'immutable';
import {log} from './utils';

var jsObj = {
    golfers: [
        {
            first: 'daniel',
            last: 'williams',
            rounds: [
                {name: 'day 1', course: 'front', score: 71},
                {name: 'day 2', course: 'back', score:75},
            ],
        },
        {
            first: 'lacey',
            last: 'johnston',
            rounds: [
                {name: 'day 1', course: 'back', score: 70},
                {name: 'day 2', course: 'front', score:72},
            ],
        },
    ],
}
var json = JSON.stringify(jsObj);

module.exports = {
    test: function() {
        // log('immutable:', immutable);

        log('obj:', jsObj);

        var imObj = fromJS(jsObj);
        log('imObj:', imObj);

        // correct my score
        log(imObj.setIn(['golfers', 0, 'rounds', 0, 'score'], 64))

    },
}
