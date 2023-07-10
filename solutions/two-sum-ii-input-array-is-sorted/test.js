const { twoSum } = require("./code.js");

test(`[2,7,11,15],9`, () => {
  expect(twoSum([2,7,11,15],9)).toEqual([1,2]);
});

test(`[2,3,4],6`, () => {
  expect(twoSum([2,3,4],6)).toEqual([1,3]);
});

test(`[-1,0],-1`, () => {
  expect(twoSum([-1,0],-1)).toEqual([1,2]);
});

