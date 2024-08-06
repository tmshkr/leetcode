
const { maxProductDifference } = require("./solution.js");


test(`[5,6,2,7,4]`, () => {
  const inputs = [[5,6,2,7,4]];
  const expected = 34;
  const actual = maxProductDifference(...inputs);
  expect(actual).toEqual(expected);
});

test(`[4,2,5,9,7,4,8]`, () => {
  const inputs = [[4,2,5,9,7,4,8]];
  const expected = 64;
  const actual = maxProductDifference(...inputs);
  expect(actual).toEqual(expected);
});

