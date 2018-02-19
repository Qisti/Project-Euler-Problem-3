
const largestPrimeNumber = require('../src/largestPrimeNumber');

describe ('.largestPrimeNumber', () => { 

  test('value', () => {
    expect(largestPrimeNumber(191726)).toBe(5639);
  });
  test('value', () => {
    expect(largestPrimeNumber(1234123)).toBe(743);
  });
  test('value', () => {
    expect(largestPrimeNumber(86345)).toBe(2467);
  });
});



