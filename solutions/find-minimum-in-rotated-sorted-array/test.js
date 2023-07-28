const { findMin } = require("./code.js");

test(`[3,4,5,1,2]`, () => {
  expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
});

test(`[4,5,6,7,0,1,2]`, () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});

test(`[11,13,15,17]`, () => {
  expect(findMin([11, 13, 15, 17])).toEqual(11);
});

test(`[1]`, () => {
  expect(findMin([1])).toEqual(1);
});
