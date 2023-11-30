/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

module.exports = { pivotIndex };

/*
https://leetcode.com/problems/find-pivot-index/
*/
