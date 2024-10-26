
const { lastStoneWeight } = require("./solution.js");


test(`[2,7,4,1,8,1]`, () => {
  const inputs = [[2,7,4,1,8,1]];
  const expected = 1;
  const actual = lastStoneWeight(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1]`, () => {
  const inputs = [[1]];
  const expected = 1;
  const actual = lastStoneWeight(...inputs);
  expect(actual).toEqual(expected);
});

