const { getSum } = require("./solution.js");

test(`1,2`, () => {
  expect(getSum(1, 2)).toEqual(3);
});

test(`2,3`, () => {
  expect(getSum(2, 3)).toEqual(5);
});

test(`-3,2`, () => {
  expect(getSum(-3, 2)).toEqual(-1);
});

test(`-1,1`, () => {
  expect(getSum(-1, 1)).toEqual(0);
});
