const doToday = require('hexlet-racket/lesson18/18')

describe('lesson18/doToday', () => {
  it('should return "work" for values [1,2,3,4,5]', () => {
    expect(doToday(1)).toBe("work");
    expect(doToday(2)).toBe("work");
    expect(doToday(3)).toBe("work");
    expect(doToday(4)).toBe("work");
    expect(doToday(5)).toBe("work");
  });

  it('should return "rest" for values [6,7]', () => {
    expect(doToday(6)).toBe("rest");
    expect(doToday(7)).toBe("rest");
  });

  it('should return "???" for other numbers and non number', () => {
    expect(doToday(0)).toBe("???");
  });
})