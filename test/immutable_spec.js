import immutable, {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import {log} from '../src/utilz';

describe('Immutable Library', () => {
    describe('set()', () => {
        it('yeilds a new Immutable', () => {
            var state = Map({
                first:'daniel',
                last:'williams',
                isCool:true});

            var nextState = state.set('isCool', false);

            expect(immutable.is(nextState, state)).to.be.false;
            expect(nextState).to.be.an.instanceof(Map);
        });
        it('original obj remains unchanged', () => {
            var state = Map({
                first:'daniel',
                last:'williams',
                isCool:true});

            var nextState = state.set('isCool', false);

            expect(state).to.equal(Map({
                first:'daniel',
                last:'williams',
                isCool:true}));
        });
        it('yields original if set results in zero changes', () => {
            var state = Map({first:'daniel',last:'williams',age:46});

            var nextState = state.set('age', 46);

            expect(nextState).to.equal(state);
        })

    });
});
