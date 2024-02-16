
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const start = search(nums, target, true);
  const end = search(nums, target, false);
  return [start, end];
};

function search(nums, target, leftBias) {
  let L = 0;
  let R = nums.length - 1;
  let i = -1;
  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    if (target > nums[mid]) {
      L = mid + 1;
    } else if (target < nums[mid]) {
      R = mid - 1;
    } else {
      i = mid;
      if (leftBias) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    }
  }

  return i;
};

module.exports = { searchRange };

/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/
