/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = nums[0];
  let max = 1;
  let min = 1;

  for (const num of nums) {
    const tmp = max;
    max = Math.max(num, num * max, num * min);
    min = Math.min(num, num * tmp, num * min);
    res = Math.max(res, max);
  }

  return res;
};

module.exports = { maxProduct };

/*
https://leetcode.com/problems/maximum-product-subarray/
*/
