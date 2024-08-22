
const { findContentChildren } = require("./solution.js");


test(`[1,2,3],[1,1]`, () => {
  const inputs = [[1,2,3],[1,1]];
  const expected = 1;
  const actual = findContentChildren(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2],[1,2,3]`, () => {
  const inputs = [[1,2],[1,2,3]];
  const expected = 2;
  const actual = findContentChildren(...inputs);
  expect(actual).toEqual(expected);
});

