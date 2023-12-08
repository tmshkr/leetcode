/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let lo = 0;
  let mid = 0;
  let hi = nums.length - 1;

  while (mid <= hi) {
    switch (nums[mid]) {
      case 0:
        [nums[lo], nums[mid]] = [nums[mid], nums[lo]];
        lo++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[hi]] = [nums[hi], nums[mid]];
        hi--;
        break;

      default:
        throw new Error("Invalid color");
    }
  }
};

module.exports = { sortColors };

/*
https://leetcode.com/problems/sort-colors/
*/
