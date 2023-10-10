/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let longest = 1;

  for (let i = 1; i < nums.length; i++) {
    let j = 0;
    while (j < i) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        longest = Math.max(longest, dp[i]);
      }
      j++;
    }
  }

  return longest;
};

module.exports = { lengthOfLIS };

/*
https://leetcode.com/problems/longest-increasing-subsequence/
*/
