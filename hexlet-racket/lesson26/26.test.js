const nextChars = require('hexlet-racket/lesson26/26');

describe('lesson26/nextChars - each symbol should be next', () => {
  it('should take "" and return "" string', () => {
    expect(nextChars('')).toBe('');
  });

  it('should take "abc" and return "bcd" string', () => {
    expect(nextChars('abc')).toBe('bcd');
  });

  it('should take "12345" and return "23456" string', () => {
    expect(nextChars('12345')).toBe('23456');
  });

  it('should take "0@" and return "1A" string', () => {
    expect(nextChars('12345')).toBe('23456');
  });
});
