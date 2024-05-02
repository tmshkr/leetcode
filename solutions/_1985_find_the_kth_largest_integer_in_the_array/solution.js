/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  nums.sort((a, b) =>
    a.length !== b.length ? a.length - b.length : a.localeCompare(b)
  );
  return nums[nums.length - k];
};

module.exports = { kthLargestNumber };

/*
https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
*/
