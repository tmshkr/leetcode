/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const target = nums.reduce((a, c) => a + c, 0) - x;
  let currSum = 0;
  let maxLen = -1;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    currSum += nums[R];

    while (L <= R && currSum > target) {
      currSum -= nums[L];
      L++;
    }

    if (currSum === target) {
      maxLen = Math.max(maxLen, R - L + 1);
    }
  }

  return maxLen === -1 ? -1 : nums.length - maxLen;
};

module.exports = { minOperations };

/*
https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
*/
