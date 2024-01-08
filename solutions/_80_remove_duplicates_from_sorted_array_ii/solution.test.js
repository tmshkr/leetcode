const { removeDuplicates } = require("./solution.js");

test(`[1,1,1,2,2,3]`, () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const expected = [1, 1, 2, 2, 3, null];
  const k = removeDuplicates(nums);
  expect(k).toEqual(5);
  expect(nums.slice(0, k)).toEqual(expected.slice(0, k));
});

test(`[0,0,1,1,1,1,2,3,3]`, () => {
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const expected = [0, 0, 1, 1, 2, 3, 3, null, null];
  const k = removeDuplicates(nums);
  expect(k).toEqual(7);
  expect(nums.slice(0, k)).toEqual(expected.slice(0, k));
});
