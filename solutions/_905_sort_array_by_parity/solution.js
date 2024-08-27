/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let L = 0;
  for (let R = 0; R < nums.length; R++) {
    if (nums[R] % 2 === 0) {
      [nums[L], nums[R]] = [nums[R], nums[L]];
      L++;
    }
  }
  return nums;
};

module.exports = { sortArrayByParity };

/*
https://leetcode.com/problems/sort-array-by-parity/
*/
