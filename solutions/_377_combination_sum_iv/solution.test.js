
const { combinationSum4 } = require("./solution.js");


test(`[1,2,3],4`, () => {
  const inputs = [[1,2,3],4];
  const expected = 7;
  const actual = combinationSum4(...inputs);
  expect(actual).toEqual(expected);
});

test(`[9],3`, () => {
  const inputs = [[9],3];
  const expected = 0;
  const actual = combinationSum4(...inputs);
  expect(actual).toEqual(expected);
});

