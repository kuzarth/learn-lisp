const skip = require('./24');

describe('lesson24/skip', () => {
  it('should return original list if n is negative', () => {
    expect(skip(-5, [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return original list if n is 0', () => {
    expect(skip(0, [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return list without firs item if n is 1', () => {
    expect(skip(1, [1, 2, 3])).toEqual([2, 3]);
  });

  it('should return empty list if n more then list length', () => {
    expect(skip(10, [1, 2, 3])).toEqual([]);
  });
});
