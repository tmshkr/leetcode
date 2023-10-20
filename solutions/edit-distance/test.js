const { minDistance } = require("./solution.js");

test(`"horse","ros"`, () => {
  expect(minDistance("horse","ros")).toEqual(3);
});

test(`"intention","execution"`, () => {
  expect(minDistance("intention","execution")).toEqual(5);
});

