const scrollLeft = require('hexlet-racket/lesson28/28');

describe('lesson28/scrollLeft', () => {
  it('should return empty string', () => {
    expect(scrollLeft('')).toBe('');
  });

  it('should return "a" from "a"', () => {
    expect(scrollLeft('a')).toBe('a');
  });

  it('should return "bca" from "abc', () => {
    expect(scrollLeft('abc')).toBe('bca');
  });

  it('should return "abc" from three times called scrollLeft("abc")', () => {
    expect(scrollLeft(scrollLeft(scrollLeft('abc')))).toBe('abc');
  });
});
