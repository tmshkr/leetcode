/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  let l = 0;
  let r = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result[i] = nums[l++];
    } else {
      result[i] = nums[r--];
    }
  }

  return result;
};

module.exports = { rearrangeArray };

/*
https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
*/
