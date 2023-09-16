const { maxArea } = require("./solution.js");

test(`[1,8,6,2,5,4,8,3,7]`, () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
});

test(`[1,1]`, () => {
  expect(maxArea([1,1])).toEqual(1);
});

