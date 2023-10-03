/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  return nums.length === 1
    ? nums[0]
    : Math.max(findMax(nums.slice(1)), findMax(nums.slice(0, -1)));
};

function findMax(nums) {
  let prevMax = 0;
  let maxSum = 0;

  for (const money of nums) {
    [prevMax, maxSum] = [maxSum, Math.max(prevMax + money, maxSum)];
  }
  return maxSum;
}

module.exports = { rob };

/*
https://leetcode.com/problems/house-robber-ii/
*/
