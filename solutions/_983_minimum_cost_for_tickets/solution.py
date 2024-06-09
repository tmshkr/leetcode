from typing import List


class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        dp = [0] * (days[-1] + 1)
        i = 0
        for day in range(1, len(dp)):
            if day < days[i]:
                dp[day] = dp[day - 1]
            else:
                i += 1
                dp[day] = min(
                    dp[day - 1] + costs[0],
                    dp[max(day - 7, 0)] + costs[1],
                    dp[max(day - 30, 0)] + costs[2],
                )
        return dp[-1]


# https://leetcode.com/problems/minimum-cost-for-tickets/
