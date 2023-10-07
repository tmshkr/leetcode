const { coinChange } = require("./solution.js");

test(`[1,2,5],11`, () => {
  expect(coinChange([1,2,5],11)).toEqual(3);
});

test(`[2],3`, () => {
  expect(coinChange([2],3)).toEqual(-1);
});

test(`[1],0`, () => {
  expect(coinChange([1],0)).toEqual(0);
});

