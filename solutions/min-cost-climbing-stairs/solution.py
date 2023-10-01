from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        minCost = 0
        prevMin = 0

        for i in range(2, n + 1):
            minCost, prevMin = min(
                minCost + cost[i - 1], prevMin + cost[i - 2]
            ), minCost

        return minCost


# https://leetcode.com/problems/min-cost-climbing-stairs/
