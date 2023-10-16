const { findTargetSumWays } = require("./solution.js");

test(`[1,1,1,1,1],3`, () => {
  expect(findTargetSumWays([1,1,1,1,1],3)).toEqual(5);
});

test(`[1],1`, () => {
  expect(findTargetSumWays([1],1)).toEqual(1);
});

