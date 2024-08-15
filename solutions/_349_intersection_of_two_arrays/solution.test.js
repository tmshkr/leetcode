
const { intersection } = require("./solution.js");


test(`[1,2,2,1],[2,2]`, () => {
  const inputs = [[1,2,2,1],[2,2]];
  const expected = [2];
  const actual = intersection(...inputs);
  expect(actual).toEqual(expected);
});

test(`[4,9,5],[9,4,9,8,4]`, () => {
  const inputs = [[4,9,5],[9,4,9,8,4]];
  const expected = [9,4];
  const actual = intersection(...inputs);
  expect(actual).toEqual(expected);
});

