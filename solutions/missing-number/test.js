const { missingNumber } = require("./solution.js");

test(`[3,0,1]`, () => {
  expect(missingNumber([3,0,1])).toEqual(2);
});

test(`[0,1]`, () => {
  expect(missingNumber([0,1])).toEqual(2);
});

test(`[9,6,4,2,3,5,7,0,1]`, () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
});

