/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  return nums.at(-1) * nums.at(-2) - nums.at(0) * nums.at(1);
};

module.exports = { maxProductDifference };

/*
https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
*/
