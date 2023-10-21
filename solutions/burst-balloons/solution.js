/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  const dp = Array(n + 2)
    .fill(0)
    .map(() => Array(n + 2).fill(0));

  const newNums = [1, ...nums, 1];

  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] +
            newNums[i - 1] * newNums[k] * newNums[j + 1] +
            dp[k + 1][j]
        );
      }
    }
  }

  return dp[1][n];
};

module.exports = { maxCoins };

/*
https://leetcode.com/problems/burst-balloons/
*/
