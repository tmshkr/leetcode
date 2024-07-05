
const { numIdenticalPairs } = require("./solution.js");


test(`[1,2,3,1,1,3]`, () => {
  const inputs = [[1,2,3,1,1,3]];
  const expected = 4;
  const actual = numIdenticalPairs(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1,1,1]`, () => {
  const inputs = [[1,1,1,1]];
  const expected = 6;
  const actual = numIdenticalPairs(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3]`, () => {
  const inputs = [[1,2,3]];
  const expected = 0;
  const actual = numIdenticalPairs(...inputs);
  expect(actual).toEqual(expected);
});

