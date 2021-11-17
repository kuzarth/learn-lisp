const maps = require('hexlet-racket/lesson20/20');

const add1 = (x) => x + 1;
const isString = (str) => typeof str === 'string';

describe('lesson20/maps', () => {
  it('should take fns [add1, isString] and args [[10, 20], ["a", 0]] and return [[11, 21], [true, false]]', () => {
    expect(maps([add1, isString], [[10, 20], ['a', 0]])).toEqual([[11, 21], [true, false]]);
  });
});
