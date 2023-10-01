/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let minCost = 0;
  let prevMin = 0;

  for (let i = 2; i <= n; i++) {
    [minCost, prevMin] = [
      Math.min(minCost + cost[i - 1], prevMin + cost[i - 2]),
      minCost,
    ];
  }

  return minCost;
};

module.exports = { minCostClimbingStairs };

/*
https://leetcode.com/problems/min-cost-climbing-stairs/
*/
