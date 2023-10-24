const { canJump } = require("./solution.js");

test(`[2,3,1,1,4]`, () => {
  expect(canJump([2,3,1,1,4])).toEqual(true);
});

test(`[3,2,1,0,4]`, () => {
  expect(canJump([3,2,1,0,4])).toEqual(false);
});

