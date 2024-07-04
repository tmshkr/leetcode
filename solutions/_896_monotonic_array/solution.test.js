
const { isMonotonic } = require("./solution.js");


test(`[1,2,2,3]`, () => {
  const inputs = [[1,2,2,3]];
  const expected = true;
  const actual = isMonotonic(...inputs);
  expect(actual).toEqual(expected);
});

test(`[6,5,4,4]`, () => {
  const inputs = [[6,5,4,4]];
  const expected = true;
  const actual = isMonotonic(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,3,2]`, () => {
  const inputs = [[1,3,2]];
  const expected = false;
  const actual = isMonotonic(...inputs);
  expect(actual).toEqual(expected);
});

