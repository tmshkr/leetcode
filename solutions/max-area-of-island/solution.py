from typing import List


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        maxArea = 0

        def dfs(r, c, counter):
            if (
                r < 0
                or c < 0
                or r == ROWS
                or c == COLS
                or grid[r][c] == 0
            ):
                return

            nonlocal maxArea

            counter["count"] += 1
            maxArea = max(maxArea, counter["count"])
            grid[r][c] = 0
            dfs(r + 1, c, counter)
            dfs(r - 1, c, counter)
            dfs(r, c + 1, counter)
            dfs(r, c - 1, counter)

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if (grid[i][j] == 1):
                    dfs(i, j, {"count": 0})

        return maxArea


# https://leetcode.com/problems/max-area-of-island/
