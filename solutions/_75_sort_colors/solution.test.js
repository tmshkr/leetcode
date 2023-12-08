const { sortColors } = require("./solution.js");

test(`[2,0,2,1,1,0]`, () => {
  const arr = [2, 0, 2, 1, 1, 0];
  const expected = [0, 0, 1, 1, 2, 2];
  sortColors(arr);
  expect(arr).toEqual(expected);
});

test(`[2,0,1]`, () => {
  const arr = [2, 0, 1];
  const expected = [0, 1, 2];
  sortColors(arr);
  expect(arr).toEqual(expected);
});
