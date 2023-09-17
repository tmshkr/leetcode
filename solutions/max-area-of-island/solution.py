from typing import List


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        maxArea = 0
        visited = [[False for _ in range(COLS)] for _ in range(ROWS)]

        def dfs(r, c):
            if (
                r < 0
                or c < 0
                or r == ROWS
                or c == COLS
                or visited[r][c]
                or grid[r][c] == 0
            ):
                return 0

            visited[r][c] = True
            return (1 +
                    dfs(r + 1, c) +
                    dfs(r - 1, c) +
                    dfs(r, c + 1) +
                    dfs(r, c - 1))

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                maxArea = max(maxArea, dfs(i, j))

        return maxArea


# https://leetcode.com/problems/max-area-of-island/
