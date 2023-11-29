const { nextGreaterElement } = require("./solution.js");

test(`[4,1,2],[1,3,4,2]`, () => {
  const inputs = [
    [4, 1, 2],
    [1, 3, 4, 2],
  ];
  const expected = [-1, 3, -1];
  const actual = nextGreaterElement(...inputs);
  expect(actual).toEqual(expected);
});

test(`[2,4],[1,2,3,4]`, () => {
  const inputs = [
    [2, 4],
    [1, 2, 3, 4],
  ];
  const expected = [3, -1];
  const actual = nextGreaterElement(...inputs);
  expect(actual).toEqual(expected);
});
