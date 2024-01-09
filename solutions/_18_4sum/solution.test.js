const { fourSum } = require("./solution.js");

test(`[1,0,-1,0,-2,2],0`, () => {
  const inputs = [[1, 0, -1, 0, -2, 2], 0];
  const expected = [
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ];
  const actual = fourSum(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,2,2,2,2],8`, () => {
  const inputs = [[2, 2, 2, 2, 2], 8];
  const expected = [[2, 2, 2, 2]];
  const actual = fourSum(...inputs);
  expect(actual).toEqual(expected);
});
