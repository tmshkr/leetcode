const { rob } = require("./solution.js");

test(`[2,3,2]`, () => {
  expect(rob([2,3,2])).toEqual(3);
});

test(`[1,2,3,1]`, () => {
  expect(rob([1,2,3,1])).toEqual(4);
});

test(`[1,2,3]`, () => {
  expect(rob([1,2,3])).toEqual(3);
});

