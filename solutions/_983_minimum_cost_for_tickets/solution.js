/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = new Array(days.at(-1) + 1).fill(0);
  const set = new Set(days);
  for (let i = 1; i < dp.length; i++) {
    if (!set.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    }
  }
  return dp.at(-1);
};

module.exports = { mincostTickets };

/*
https://leetcode.com/problems/minimum-cost-for-tickets/
*/
