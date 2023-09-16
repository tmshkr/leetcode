/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};

module.exports = { search };

/*
https://leetcode.com/problems/binary-search/
*/
