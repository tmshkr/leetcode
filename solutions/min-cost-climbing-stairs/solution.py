from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        l = len(cost)
        minCost = [0] * (l + 1)
        for i in range(2, l + 1):
            minCost[i] = min(
                minCost[i - 1] + cost[i - 1],
                minCost[i - 2] + cost[i - 2]
            )

        return minCost[l]


# https://leetcode.com/problems/min-cost-climbing-stairs/
