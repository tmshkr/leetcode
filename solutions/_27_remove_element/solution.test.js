const { removeElement } = require("./solution.js");

test(`[3,2,2,3],3`, () => {
  const inputs = [[3, 2, 2, 3], 3];
  const expected = 2;
  const actual = removeElement(...inputs);
  expect(actual).toBe(expected);
});

test(`[0,1,2,2,3,0,4,2],2`, () => {
  const inputs = [[0, 1, 2, 2, 3, 0, 4, 2], 2];
  const expected = 5;
  const actual = removeElement(...inputs);
  expect(actual).toBe(expected);
});
