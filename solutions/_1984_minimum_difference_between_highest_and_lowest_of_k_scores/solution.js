/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = k - 1;
  let min = Infinity;

  while (r < nums.length) {
    min = Math.min(min, nums[r] - nums[l]);
    l++;
    r++;
  }

  return min;
};

module.exports = { minimumDifference };

/*
https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
*/
