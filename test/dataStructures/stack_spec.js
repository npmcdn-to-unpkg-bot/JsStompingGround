import immutable, {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';

import Stack from '../../src/dataStructures/Stack';

describe('A Stack', () => {

    it('should initialize with a count of zero', () => {
        var myStack = new Stack();
        expect(myStack.getCount()).to.be.equal(0);
    });

    it('should increment count when item is pushed', () => {
        var myStack = new Stack();
        myStack.push(4);

        expect(myStack.getCount() === 1).to.be.true;
    });

    it('should be a last in first out structure', () => {
        var myStack = new Stack();
        myStack.push(10);
        myStack.push(5);

        expect(myStack.pop() === 5).to.be.true;
    });

    it('should peek without altering count or items', () => {
        var myStack = new Stack();
        myStack.push(10);
        myStack.push(5);

        expect(myStack.peek() === 5).to.be.true;
        expect(myStack.getCount() === 2).to.be.true;

        var items = fromJS(myStack.toArray());
        expect(items).to.be.equal(fromJS(new Array(10,5)));
    });

    it('should peek and pop null when empty', () => {
        var myStack = new Stack();
        myStack.push(10);

        expect(myStack.peek() === 10).to.be.true;
        expect(myStack.pop() === 10).to.be.true;

        expect(myStack.peek()).to.be.null;
        expect(myStack.pop()).to.be.null;
    });
});
