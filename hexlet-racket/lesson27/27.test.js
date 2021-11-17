const { passwordValid, passwordGood } = require('hexlet-racket/lesson27/27');

describe('lesson27/passwordValid', () => {
  it('should return false for invalid passwords', () => {
    expect(passwordValid('')).toBeFalsy();
    expect(passwordValid('***')).toBeFalsy();
    expect(passwordValid('a b')).toBeFalsy();
    expect(passwordValid('a1?')).toBeFalsy();
  })

  it('should return true for valid passwords', () => {
    expect(passwordValid('god')).toBeTruthy();
    expect(passwordValid('LOVE')).toBeTruthy();
    expect(passwordValid('123456')).toBeTruthy();
    expect(passwordValid('U2')).toBeTruthy();
  })
});

describe('lesson27/passwordGood', () => {
  it('should return false for bad passwords', () => {
    expect(passwordGood('')).toBeFalsy();
    expect(passwordGood('***')).toBeFalsy();
    expect(passwordGood('a b')).toBeFalsy();
    expect(passwordGood('a1?')).toBeFalsy();

    expect(passwordGood('god')).toBeFalsy();
    expect(passwordGood('LOVE')).toBeFalsy();
    expect(passwordGood('123456')).toBeFalsy();
    expect(passwordGood('U2')).toBeFalsy();
  })

  it('should return true for good passwords', () => {
    expect(passwordGood('1cat1dog')).toBeTruthy();
    expect(passwordGood('R2D2andC3PO')).toBeTruthy();
  })
});