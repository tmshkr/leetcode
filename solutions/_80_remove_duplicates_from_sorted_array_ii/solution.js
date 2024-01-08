/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 2;

  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

module.exports = { removeDuplicates };

/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
*/
