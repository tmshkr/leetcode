const { maxCoins } = require("./solution.js");

test(`[3,1,5,8]`, () => {
  expect(maxCoins([3,1,5,8])).toEqual(167);
});

test(`[1,5]`, () => {
  expect(maxCoins([1,5])).toEqual(10);
});

