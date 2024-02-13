
const { successfulPairs } = require("./solution.js");


test(`[5,1,3],[1,2,3,4,5],7`, () => {
  const inputs = [[5,1,3],[1,2,3,4,5],7];
  const expected = [4,0,3];
  const actual = successfulPairs(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,1,2],[8,5,8],16`, () => {
  const inputs = [[3,1,2],[8,5,8],16];
  const expected = [2,0,2];
  const actual = successfulPairs(...inputs);
  expect(actual).toEqual(expected);
});

