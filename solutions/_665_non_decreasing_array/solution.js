/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (prev > nums[i]) {
      if (++count > 1) {
        return false;
      }
      if (i >= 2 && nums[i - 2] > nums[i]) {
        continue;
      }
    }
    prev = nums[i];
  }
  return true;
};

module.exports = { checkPossibility };

/*
https://leetcode.com/problems/non-decreasing-array/
*/
