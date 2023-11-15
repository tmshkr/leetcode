/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let x = n;
  for (let i = 0; i < n; i++) {
    x ^= i ^ nums[i];
  }

  return x;
};

module.exports = { missingNumber };

/*
https://leetcode.com/problems/missing-number/
*/
