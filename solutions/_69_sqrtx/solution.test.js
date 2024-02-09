
const { mySqrt } = require("./solution.js");


test(`4`, () => {
  const inputs = [4];
  const expected = 2;
  const actual = mySqrt(...inputs);
  expect(actual).toEqual(expected);
});

test(`8`, () => {
  const inputs = [8];
  const expected = 2;
  const actual = mySqrt(...inputs);
  expect(actual).toEqual(expected);
});

