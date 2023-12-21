const { largestNumber } = require("./solution.js");

test(`[10,2]`, () => {
  const inputs = [[10, 2]];
  const expected = "210";
  const actual = largestNumber(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,30,34,5,9]`, () => {
  const inputs = [[3, 30, 34, 5, 9]];
  const expected = "9534330";
  const actual = largestNumber(...inputs);
  expect(actual).toEqual(expected);
});
