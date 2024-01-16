/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = 0;
  let sum = 0;
  let max = 0;

  while (r < nums.length) {
    sum += nums[r];
    while (sum + k < nums[r] * (r - l + 1)) {
      sum -= nums[l];
      l++;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
};

module.exports = { maxFrequency };

/*
https://leetcode.com/problems/frequency-of-the-most-frequent-element/
*/
