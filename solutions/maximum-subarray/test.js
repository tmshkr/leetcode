const { maxSubArray } = require("./solution.js");

test(`[-2,1,-3,4,-1,2,1,-5,4]`, () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});

test(`[1]`, () => {
  expect(maxSubArray([1])).toEqual(1);
});

test(`[5,4,-1,7,8]`, () => {
  expect(maxSubArray([5,4,-1,7,8])).toEqual(23);
});

