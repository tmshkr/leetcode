/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let total = 0;
  let count = 0;
  for (const num of nums) {
    if (num !== 0) {
      count = 0;
    } else {
      count++;
      total += count;
    }
  }
  return total;
};

module.exports = { zeroFilledSubarray };

/*
https://leetcode.com/problems/number-of-zero-filled-subarrays/
*/
