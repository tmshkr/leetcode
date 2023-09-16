const { findMedianSortedArrays } = require("./solution.js");

test(`[1,3],[2]`, () => {
  expect(findMedianSortedArrays([1,3],[2])).toEqual(2.00000);
});

test(`[1,2],[3,4]`, () => {
  expect(findMedianSortedArrays([1,2],[3,4])).toEqual(2.50000);
});

