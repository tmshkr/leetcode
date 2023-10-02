const { rob } = require("./solution.js");

test(`[1,2,3,1]`, () => {
  expect(rob([1,2,3,1])).toEqual(4);
});

test(`[2,7,9,3,1]`, () => {
  expect(rob([2,7,9,3,1])).toEqual(12);
});

