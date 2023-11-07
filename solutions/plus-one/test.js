const { plusOne } = require("./solution.js");

test(`[1,2,3]`, () => {
  expect(plusOne([1,2,3])).toEqual([1,2,4]);
});

test(`[4,3,2,1]`, () => {
  expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
});

test(`[9]`, () => {
  expect(plusOne([9])).toEqual([1,0]);
});

