const { permuteUnique } = require("./solution.js");

test(`[1,1,2]`, () => {
  const inputs = [[1, 1, 2]];
  const expected = [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ];
  const actual = permuteUnique(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3]`, () => {
  const inputs = [[1, 2, 3]];
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  const actual = permuteUnique(...inputs);
  expect(actual).toEqual(expected);
});
