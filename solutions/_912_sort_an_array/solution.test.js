const { sortArray } = require("./solution.js");

test(`[5,2,3,1]`, () => {
  const inputs = [[5, 2, 3, 1]];
  const expected = [1, 2, 3, 5];
  const actual = sortArray(...inputs);
  expect(actual).toEqual(expected);
});

test(`[5,1,1,2,0,0]`, () => {
  const inputs = [[5, 1, 1, 2, 0, 0]];
  const expected = [0, 0, 1, 1, 2, 5];
  const actual = sortArray(...inputs);
  expect(actual).toEqual(expected);
});
