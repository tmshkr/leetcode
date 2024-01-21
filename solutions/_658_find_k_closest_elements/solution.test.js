
const { findClosestElements } = require("./solution.js");


test(`[1,2,3,4,5],4,3`, () => {
  const inputs = [[1, 2, 3, 4, 5], 4, 3];
  const expected = [1, 2, 3, 4];
  const actual = findClosestElements(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,4,5],4,-1`, () => {
  const inputs = [[1, 2, 3, 4, 5], 4, -1];
  const expected = [1, 2, 3, 4];
  const actual = findClosestElements(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4],4,3`, () => {
  const inputs = [[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4], 4, 3];
  const expected = [2, 2, 3, 3];
  const actual = findClosestElements(...inputs);
  expect(actual).toEqual(expected);
});

