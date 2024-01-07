const { removeDuplicates } = require("./solution.js");

test(`[1,1,2]`, () => {
  const nums = [1, 1, 2];
  const k = removeDuplicates(nums);
  const expected = [1, 2, null];
  expect(nums.slice(0, k)).toEqual(expected.slice(0, k));
});

test(`[0,0,1,1,1,2,2,3,3,4]`, () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(nums);
  const expected = [0, 1, 2, 3, 4, null, null, null, null, null];
  expect(nums.slice(0, k)).toEqual(expected.slice(0, k));
});
