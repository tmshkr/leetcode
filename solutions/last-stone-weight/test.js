const { lastStoneWeight } = require("./solution.js");

test(`[2,7,4,1,8,1]`, () => {
  expect(lastStoneWeight([2,7,4,1,8,1])).toEqual(1);
});

test(`[1]`, () => {
  expect(lastStoneWeight([1])).toEqual(1);
});

