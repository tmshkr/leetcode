
const { deleteAndEarn } = require("./solution.js");


test(`[3,4,2]`, () => {
  const inputs = [[3,4,2]];
  const expected = 6;
  const actual = deleteAndEarn(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,2,3,3,3,4]`, () => {
  const inputs = [[2,2,3,3,3,4]];
  const expected = 9;
  const actual = deleteAndEarn(...inputs);
  expect(actual).toEqual(expected);
});

