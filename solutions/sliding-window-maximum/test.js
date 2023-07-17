const { maxSlidingWindow } = require("./code.js");

test(`[1,3,-1,-3,5,3,6,7],3`, () => {
  expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)).toEqual([3,3,5,5,6,7]);
});

test(`[1],1`, () => {
  expect(maxSlidingWindow([1],1)).toEqual([1]);
});

