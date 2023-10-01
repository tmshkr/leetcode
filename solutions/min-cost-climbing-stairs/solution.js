/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const l = cost.length;
  const minCost = Array(l + 1).fill(0);

  for (let i = 2; i <= l; i++) {
    minCost[i] = Math.min(
      minCost[i - 1] + cost[i - 1],
      minCost[i - 2] + cost[i - 2]
    );
  }

  return minCost[l];
};

module.exports = { minCostClimbingStairs };

/*
https://leetcode.com/problems/min-cost-climbing-stairs/
*/
