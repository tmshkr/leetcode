const { findDisappearedNumbers } = require("./solution.js");

test(`[4,3,2,7,8,2,3,1]`, () => {
  const inputs = [[4, 3, 2, 7, 8, 2, 3, 1]];
  const expected = [5, 6];
  const actual = findDisappearedNumbers(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1]`, () => {
  const inputs = [[1, 1]];
  const expected = [2];
  const actual = findDisappearedNumbers(...inputs);
  expect(actual).toEqual(expected);
});
