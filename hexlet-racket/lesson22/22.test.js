const maxDelta = require('hexlet-racket/lesson22/22');

describe('lesson22/maxDelta', () => {
  it('should return 0 for empty lists', () => {
    expect(maxDelta([], [])).toBe(0);
  });

  it('should return 10 for [-5], [-15]', () => {
    expect(maxDelta([-5], [-15])).toBe(10);
  });

  it('should return 42 for [42], [42]', () => {
    expect(maxDelta([0], [42])).toBe(42);
  });

  it('should return 8 for [10, -15, 35], [2, -12, 42]', () => {
    expect(maxDelta([10, -15, 35], [2, -12, 42])).toBe(8);
  });
});