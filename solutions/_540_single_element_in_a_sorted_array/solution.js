/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];

  let L = 0;
  let R = nums.length - 1;

  const isNonDuplicate = i => {
    const isLeftDifferent = i === 0 || nums[i - 1] !== nums[i];
    const isRightDifferent = i === nums.length - 1 || nums[i + 1] !== nums[i];
    return isLeftDifferent && isRightDifferent;
  };

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    if (isNonDuplicate(mid)) {
      return nums[mid];
    }

    if (mid % 2 === 0) {
      if (nums[mid + 1] === nums[mid]) {
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    } else {
      if (nums[mid + 1] === nums[mid]) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    }
  }
};

module.exports = { singleNonDuplicate };

/*
https://leetcode.com/problems/single-element-in-a-sorted-array/
*/
