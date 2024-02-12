/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let L = 0;
  let R = nums.length - 1;

  while (L < R) {
    const mid = Math.floor((R + L) / 2);
    if (nums[mid] > nums[mid + 1]) {
      R = mid;
    } else {
      L = mid + 1;
    }
  }

  return L;
};

module.exports = { findPeakElement };

/*
https://leetcode.com/problems/find-peak-element/
*/
