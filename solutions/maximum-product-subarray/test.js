const { maxProduct } = require("./solution.js");

test(`[2,3,-2,4]`, () => {
  expect(maxProduct([2,3,-2,4])).toEqual(6);
});

test(`[-2,0,-1]`, () => {
  expect(maxProduct([-2,0,-1])).toEqual(0);
});

