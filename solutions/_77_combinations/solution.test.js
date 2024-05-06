
const { combine } = require("./solution.js");


test(`4,2`, () => {
  const inputs = [4,2];
  const expected = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]];
  const actual = combine(...inputs);
  expect(actual).toEqual(expected);
});

test(`1,1`, () => {
  const inputs = [1,1];
  const expected = [[1]];
  const actual = combine(...inputs);
  expect(actual).toEqual(expected);
});

