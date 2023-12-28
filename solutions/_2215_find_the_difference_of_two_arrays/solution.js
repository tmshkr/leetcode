/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  return [[...s1].filter((x) => !s2.has(x)), [...s2].filter((x) => !s1.has(x))];
};

module.exports = { findDifference };

/*
https://leetcode.com/problems/find-the-difference-of-two-arrays/
*/
