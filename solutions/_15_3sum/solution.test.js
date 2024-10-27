
const { threeSum } = require("./solution.js");


test(`[-1,0,1,2,-1,-4]`, () => {
  const inputs = [[-1,0,1,2,-1,-4]];
  const expected = [[-1,-1,2],[-1,0,1]];
  const actual = threeSum(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0,1,1]`, () => {
  const inputs = [[0,1,1]];
  const expected = [];
  const actual = threeSum(...inputs);
  expect(actual).toEqual(expected);
});

test(`[0,0,0]`, () => {
  const inputs = [[0,0,0]];
  const expected = [[0,0,0]];
  const actual = threeSum(...inputs);
  expect(actual).toEqual(expected);
});

