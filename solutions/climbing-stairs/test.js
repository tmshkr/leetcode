const { climbStairs } = require("./solution.js");

test(`2`, () => {
  expect(climbStairs(2)).toEqual(2);
});

test(`3`, () => {
  expect(climbStairs(3)).toEqual(3);
});

test(`42`, () => {
  expect(climbStairs(42)).toEqual(433494437);
});
