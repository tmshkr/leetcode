const { minCostClimbingStairs } = require("./solution.js");

test(`[10,15,20]`, () => {
  expect(minCostClimbingStairs([10,15,20])).toEqual(15);
});

test(`[1,100,1,1,1,100,1,1,100,1]`, () => {
  expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toEqual(6);
});

