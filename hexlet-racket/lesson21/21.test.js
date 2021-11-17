const incrementNumbers = require('hexlet-racket/lesson21/21');

describe('lesson21/incrementNumbers', () => {
  it('should return empty array', () => {
    expect(incrementNumbers([])).toEqual([]);
  });

  it('should return empty array from array without numbers', () => {
    expect(incrementNumbers(['a', true, 'lol'])).toEqual([]);
  });

  it('should return [2, 3] from input as [1, 2]', () => {
    expect(incrementNumbers([1, 2])).toEqual([2, 3]);
  });

  it('should return [3, "lol", 5] from input as [4, 6]', () => {
    expect(incrementNumbers([3, 'lol', 5])).toEqual([4, 6]);
  });
});
