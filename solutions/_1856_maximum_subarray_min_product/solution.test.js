const { maxSumMinProduct } = require("./solution.js");

test(`[1,2,3,2]`, () => {
  const inputs = [[1, 2, 3, 2]];
  const expected = 14n;
  const actual = maxSumMinProduct(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,3,3,1,2]`, () => {
  const inputs = [[2, 3, 3, 1, 2]];
  const expected = 18n;
  const actual = maxSumMinProduct(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,1,5,6,4,2]`, () => {
  const inputs = [[3, 1, 5, 6, 4, 2]];
  const expected = 60n;
  const actual = maxSumMinProduct(...inputs);
  expect(actual).toEqual(expected);
});
