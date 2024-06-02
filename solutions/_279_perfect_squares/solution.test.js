
const { numSquares } = require("./solution.js");


test(`12`, () => {
  const inputs = [12];
  const expected = 3;
  const actual = numSquares(...inputs);
  expect(actual).toEqual(expected);
});

test(`13`, () => {
  const inputs = [13];
  const expected = 2;
  const actual = numSquares(...inputs);
  expect(actual).toEqual(expected);
});

