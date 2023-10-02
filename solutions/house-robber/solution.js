/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prevMax = 0;
  let maxSum = 0;

  for (const money of nums) {
    [prevMax, maxSum] = [maxSum, Math.max(prevMax + money, maxSum)];
  }

  return maxSum;
};

module.exports = { rob };

/*
https://leetcode.com/problems/house-robber/
*/
