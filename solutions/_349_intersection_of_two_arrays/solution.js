/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result = [];

  for (const num of set2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
};

module.exports = { intersection };

/*
https://leetcode.com/problems/intersection-of-two-arrays/
*/
