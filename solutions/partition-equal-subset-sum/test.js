const { canPartition } = require("./solution.js");

test(`[1,5,11,5]`, () => {
  expect(canPartition([1,5,11,5])).toEqual(true);
});

test(`[1,2,3,5]`, () => {
  expect(canPartition([1,2,3,5])).toEqual(false);
});

