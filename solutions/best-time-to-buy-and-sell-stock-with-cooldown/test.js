const { maxProfit } = require("./solution.js");

test(`[1,2,3,0,2]`, () => {
  expect(maxProfit([1,2,3,0,2])).toEqual(3);
});

test(`[1]`, () => {
  expect(maxProfit([1])).toEqual(0);
});

