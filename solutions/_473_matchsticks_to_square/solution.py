from typing import List


class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        n = len(matchsticks)
        if n < 4:
            return False
        perimeter = sum(matchsticks)
        if perimeter % 4 != 0:
            return False
        side = perimeter // 4
        matchsticks.sort(reverse=True)
        sides = [0] * 4

        def dfs(i):
            if i == n:
                return sides[0] == sides[1] == sides[2] == side
            for j in range(4):
                if sides[j] + matchsticks[i] <= side:
                    sides[j] += matchsticks[i]
                    if dfs(i + 1):
                        return True
                    sides[j] -= matchsticks[i]
            return False

        return dfs(0)


# https://leetcode.com/problems/matchsticks-to-square/
