/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

module.exports = { searchInsert };

/*
https://leetcode.com/problems/search-insert-position/
*/
