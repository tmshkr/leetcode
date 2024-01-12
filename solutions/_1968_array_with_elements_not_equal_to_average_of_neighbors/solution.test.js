const { rearrangeArray } = require("./solution.js");

function check(nums) {
  for (let i = 1; i < nums.length - 1; i++) {
    const avg = (nums[i - 1] + nums[i + 1]) / 2;
    if (nums[i] === avg) {
      return false;
    }
  }
  return true;
}

test(`[1,2,3,4,5]`, () => {
  const inputs = [[1, 2, 3, 4, 5]];
  const actual = rearrangeArray(...inputs);
  expect(check(actual)).toBe(true);
});

test(`[6,2,0,9,7]`, () => {
  const inputs = [[6, 2, 0, 9, 7]];
  const actual = rearrangeArray(...inputs);
  expect(check(actual)).toBe(true);
});
