/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  const n = nums.length;
  if (n === 1) return false;
  const dp = [true, false, n > 1 ? nums[0] === nums[1] : false];

  for (let i = 2; i < n; i++) {
    const curr =
      (nums[i] === nums[i - 1] && dp[1]) ||
      (nums[i] === nums[i - 1] && nums[i] === nums[i - 2] && dp[0]) ||
      (nums[i] - nums[i - 1] === 1 && nums[i - 1] - nums[i - 2] === 1 && dp[0]);

    [dp[0], dp[1], dp[2]] = [dp[1], dp[2], curr];
  }

  return dp[2];
};

module.exports = { validPartition };

/*
https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/
*/
