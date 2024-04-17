
const { numTrees } = require("./solution.js");


test(`3`, () => {
  const inputs = [3];
  const expected = 5;
  const actual = numTrees(...inputs);
  expect(actual).toEqual(expected);
});

test(`1`, () => {
  const inputs = [1];
  const expected = 1;
  const actual = numTrees(...inputs);
  expect(actual).toEqual(expected);
});

