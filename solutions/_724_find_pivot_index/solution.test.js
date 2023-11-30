
const { pivotIndex } = require("./solution.js");
  

test(`[1,7,3,6,5,6]`, () => {
  const inputs = [[1,7,3,6,5,6]];
  const expected = 3;
  const actual = pivotIndex(...inputs);
  expect(actual).toBe(expected);
});

test(`[1,2,3]`, () => {
  const inputs = [[1,2,3]];
  const expected = -1;
  const actual = pivotIndex(...inputs);
  expect(actual).toBe(expected);
});

test(`[2,1,-1]`, () => {
  const inputs = [[2,1,-1]];
  const expected = 0;
  const actual = pivotIndex(...inputs);
  expect(actual).toBe(expected);
});

