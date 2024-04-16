from typing import List


class Solution:
    def numOfMinutes(
        self, n: int, headID: int, manager: List[int], informTime: List[int]
    ) -> int:
        def dfs(i):
            if manager[i] != -1:
                informTime[i] += dfs(manager[i])
                manager[i] = -1
            return informTime[i]

        max_time = 0
        for i in range(n):
            max_time = max(max_time, dfs(i))
        return max_time


# https://leetcode.com/problems/time-needed-to-inform-all-employees/
