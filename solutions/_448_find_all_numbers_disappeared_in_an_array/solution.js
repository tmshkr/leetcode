/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
      i--;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      res.push(i + 1);
    }
  }
  return res;
};

module.exports = { findDisappearedNumbers };

/*
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/
