const { moveZeroes } = require("./solution.js");

test(`[0,1,0,3,12]`, () => {
  const nums = [0, 1, 0, 3, 12];
  const expected = [1, 3, 12, 0, 0];
  moveZeroes(nums);
  expect(nums).toEqual(expected);
});

test(`[0]`, () => {
  const nums = [0];
  const expected = [0];
  moveZeroes(nums);
  expect(nums).toEqual(expected);
});
