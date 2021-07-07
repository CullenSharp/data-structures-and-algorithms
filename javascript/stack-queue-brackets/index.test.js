'use strict';

const validateBrackets = require('./index.js');

describe('testing validate brackets', () => {
  test('expect true when brackets are balanced', () => {
    expect(validateBrackets('[]')).toBeTruthy();
    expect(validateBrackets('()')).toBeTruthy();
    expect(validateBrackets('{}')).toBeTruthy();
    expect(validateBrackets('([{}])')).toBeTruthy();
  });

  test('expect false when brackets are unbalanced', () => {
    expect(validateBrackets(')')).toBeFalsy();
    expect(validateBrackets('([)')).toBeFalsy();
    expect(validateBrackets('{][)')).toBeFalsy();
    expect(validateBrackets('({}}[')).toBeFalsy();
  });
});
