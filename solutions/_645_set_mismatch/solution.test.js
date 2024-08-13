const { findErrorNums } = require("./solution.js");

test(`[1,2,2,4]`, () => {
  const inputs = [[1, 2, 2, 4]];
  const expected = [2, 3];
  const actual = findErrorNums(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1]`, () => {
  const inputs = [[1, 1]];
  const expected = [1, 2];
  const actual = findErrorNums(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,2]`, () => {
  const inputs = [[2, 2]];
  const expected = [2, 1];
  const actual = findErrorNums(...inputs);
  expect(actual).toEqual(expected);
});
