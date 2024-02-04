
const { searchInsert } = require("./solution.js");


test(`[1,3,5,6],5`, () => {
  const inputs = [[1,3,5,6],5];
  const expected = 2;
  const actual = searchInsert(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,3,5,6],2`, () => {
  const inputs = [[1,3,5,6],2];
  const expected = 1;
  const actual = searchInsert(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,3,5,6],7`, () => {
  const inputs = [[1,3,5,6],7];
  const expected = 4;
  const actual = searchInsert(...inputs);
  expect(actual).toEqual(expected);
});

