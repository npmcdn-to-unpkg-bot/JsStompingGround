module.exports = {
    run: function() {

        var rebels = [
            {
                name: 'Luke Skywalker',
            },
            {
                name: 'Han Solo',
            },
        ];
        var noAccess = 'noAccess';

        sectionTitle('Arrows Functions =>');
        rebels.map((e, i) => {
                console.log(i, e, e.name.toUpperCase());
                return e;
            }
        );

        sectionTitle('Classes');
        var o = {
            first:'Han',
            last:'Solo',
            name: function() {
                return first + ' ' + last;
            },
        }


        sectionTitle('Template Strings');
        var first = 'daniel';
        console.log(`hello ${first}`);


        sectionTitle('Promises');
        function promiseFactory(duration) {
            duration = duration || 0;
            return new Promise(function(resolve, reject) {
                setTimeout(resolve, duration);
            });
        }

        var p = promiseFactory(1000)
            .then(function() {
                console.log('promise #1 done');
                return promiseFactory(2000);
            })
            .then(function() {
                console.log('promise #2 done');
            })
            .catch(function(err) {
                console.log('Promise Error', err);
            });
    },
}

function sectionTitle(title) {
    console.log(`\nES6 ${title}`);
}

// var fibonacci = {
//   [Symbol.iterator]() {
//     let pre = 0, cur = 1;
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { done: false, value: cur }
//       }
//     }
//   }
// }
//
// for (var n of fibonacci) {
//   // truncate the sequence at 1000
//   if (n > 1000)
//     break;
//   console.log(n);
// }






// class Base {};
// class Derived extends Base {};
// // class a {
// //     constructor(first, last) {
// //         if(first) { this.first = first; }
// //         if(last) { this.last = last; }
// //     }
// // };
// console.log(Base, Derived);
//
// var test1 = new a();
// test1.name();
//
// var test2 = new a('daniel', 'williams');
// test2.name();
