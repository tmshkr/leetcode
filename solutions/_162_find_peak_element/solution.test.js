
const { findPeakElement } = require("./solution.js");


test(`[1,2,3,1]`, () => {
  const inputs = [[1,2,3,1]];
  const expected = 2;
  const actual = findPeakElement(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,1,3,5,6,4]`, () => {
  const inputs = [[1,2,1,3,5,6,4]];
  const expected = 5;
  const actual = findPeakElement(...inputs);
  expect(actual).toEqual(expected);
});

