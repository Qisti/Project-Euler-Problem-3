const largestPrimeNumber = require('../src/largestPrimeNumber');

test('nilai', () => {
  expect(largestPrimeNumber(191726)).toBe(5639);
});

