const add1 = (x) => x + 1;
const isInteger = (x) => Number.isInteger(x);

const incrementNumbers = (xs) => xs.filter(isInteger).map(add1);

// Ramda style
// const filter = (predicate, array) => array.filter(predicate);
// const map = (fn, array) => array.map(fn);
//
// const incrementNumbers = (array) => map(add1, filter(isInteger, array));

module.exports = incrementNumbers;
