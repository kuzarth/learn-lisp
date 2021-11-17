const lookup = require('hexlet-racket/lesson23/23');

const userAges = [
  ["Tom", 31],
  ["Alice", 22],
  ["Bob", 42],
];

const userAgesWithDuplicates = [
  ...userAges,
  ["Tom", 23],
];

describe('lesson23/lookup', () => {
  it('should return {"Alice": 22} for key "Alice"', () => {
    expect(lookup('Alice', userAges)).toEqual({'Alice': 22});
  });

  it('should return first pair for key "Tom"', () => {
    expect(lookup('Tom', userAgesWithDuplicates)).toEqual({'Tom': 31});
  });

  it('should return false for non exist user', () => {
    expect(lookup('Moe', userAges)).toBe(false);
  });
});
