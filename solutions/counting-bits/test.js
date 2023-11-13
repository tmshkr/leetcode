const { countBits } = require("./solution.js");

test(`2`, () => {
  expect(countBits(2)).toEqual([0,1,1]);
});

test(`5`, () => {
  expect(countBits(5)).toEqual([0,1,1,2,1,2]);
});

