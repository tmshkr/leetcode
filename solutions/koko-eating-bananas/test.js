const { minEatingSpeed } = require("./solution.js");

test(`[3,6,7,11],8`, () => {
  expect(minEatingSpeed([3,6,7,11],8)).toEqual(4);
});

test(`[30,11,23,4,20],5`, () => {
  expect(minEatingSpeed([30,11,23,4,20],5)).toEqual(30);
});

test(`[30,11,23,4,20],6`, () => {
  expect(minEatingSpeed([30,11,23,4,20],6)).toEqual(23);
});

