/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    const mid = L + Math.floor((R - L) / 2);
    if (nums[mid] === target) {
      return true;
    }

    if (nums[L] === nums[mid] && nums[mid] === nums[R]) {
      L++;
      R--;
    } else if (nums[L] <= nums[mid]) {
      if (nums[L] <= target && target < nums[mid]) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[R]) {
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
  }

  return false;
};

module.exports = { search };

/*
https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
*/
