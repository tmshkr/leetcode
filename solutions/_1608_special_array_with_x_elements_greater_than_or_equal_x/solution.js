/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  let prev = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remaining = nums.length - i;
    if (num >= remaining && remaining > prev) {
      return remaining;
    }
    prev = num;
  }
  return -1;
};

module.exports = { specialArray };

/*
https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
*/
