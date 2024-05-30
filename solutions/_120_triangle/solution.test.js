
const { minimumTotal } = require("./solution.js");


test(`[[2],[3,4],[6,5,7],[4,1,8,3]]`, () => {
  const inputs = [[[2],[3,4],[6,5,7],[4,1,8,3]]];
  const expected = 11;
  const actual = minimumTotal(...inputs);
  expect(actual).toEqual(expected);
});

test(`[[-10]]`, () => {
  const inputs = [[[-10]]];
  const expected = -10;
  const actual = minimumTotal(...inputs);
  expect(actual).toEqual(expected);
});

