const { largestRectangleArea } = require("./solution.js");

test(`[2,1,5,6,2,3]`, () => {
  expect(largestRectangleArea([2,1,5,6,2,3])).toEqual(10);
});

test(`[2,4]`, () => {
  expect(largestRectangleArea([2,4])).toEqual(4);
});

