from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0

        def dfs(i, j):
            if (
                    i < 0 or
                    j < 0 or
                    i >= len(grid) or
                    j >= len(grid[i]) or
                    grid[i][j] == "0"
            ):
                return

            grid[i][j] = "0"

            dfs(i - 1, j)
            dfs(i + 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == "1":
                    count += 1
                    dfs(i, j)

        return count


# https://leetcode.com/problems/number-of-islands/
