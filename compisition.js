'use strict';
var assign = require('object-assign');

const named = (state) => ({
    name: state.name || '?',
    speak: () => 'Hello, my name is ' + state.name,
});
const eater = (state) => ({
    eat: () => 'chomp. chew. swallow.',
});
const sleeper = (state) => ({
    sleep: () => 'zzzz.',
});
const lazy = (state) => ({
    sleep: () => 'ZZZZZzzzzzz!!',
});


module.exports = {
    run: function() {
        var dog = assign({}, named({name:'rover'}), eater({}), sleeper({}), lazy({}));

        for(let key in dog) {
            if(dog[key] instanceof Function) {
                console.log(key + '()=' + dog[key]());
            } else {
                console.log(key + '=' + dog[key]);
            }
        }
    },
}
