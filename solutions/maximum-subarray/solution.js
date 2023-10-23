/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let total = 0;

  for (const num of nums) {
    total += num;
    res = Math.max(res, total);
    total = Math.max(0, total);
  }
  return res;
};

module.exports = { maxSubArray };

/*
https://leetcode.com/problems/maximum-subarray/
*/
