/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let min = Infinity;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    min = Math.min(min, nums[start], nums[mid]);
  }

  return min;
};

module.exports = { findMin };

/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
*/
