var Heap = require('heap');
var _ = require('lodash');
const locWords = require('./src/query/locate_keywords.js');

let queryVector = makeZeros(termIndex);

// var array = ['a', 'c'],
//     object = { 'a': 4, 'b': 7, 'c': 9 };
// let arr = ['c', 'b', 'a'];
// let arr2 = [70, 6, 6, 4];
// let inverted = _.invertBy(arr2);
//
// let K = Object.keys(inverted);
// let highest = Heap.nlargest(K, 1);
// // console.log(inverted[highest[1]]);
que = 'bar food';
invertedIndex = {'food': 5,
                 'bar': 8,
                 'football': 7};
console.log(locWords(que).toJSON());

locateKeywords(query, invIndex)

.forEach(function(position){
    this.queryVector.set([position, 0], 1);
}, this);