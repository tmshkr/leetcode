const { combinationSum } = require("./code.js");

test(`[2,3,6,7],7`, () => {
  expect(combinationSum([2,3,6,7],7)).toEqual([[2,2,3],[7]]);
});

test(`[2,3,5],8`, () => {
  expect(combinationSum([2,3,5],8)).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
});

test(`[2],1`, () => {
  expect(combinationSum([2],1)).toEqual([]);
});

