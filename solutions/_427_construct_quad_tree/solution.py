from typing import List


# Definition for a QuadTree node.
class Node:
    def __init__(
        self,
        val,
        isLeaf,
        topLeft=None,
        topRight=None,
        bottomLeft=None,
        bottomRight=None,
    ):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight


class Solution:
    def construct(
        self, grid: List[List[int]], row: int = 0, col: int = 0, n: int = None
    ) -> Node:
        if n is None:
            n = len(grid)
        if n == 1:
            return Node(grid[row][col] == 1, True)

        if self.isLeaf(grid, row, col, n):
            return Node(grid[row][col] == 1, True)

        n //= 2
        return Node(
            True,
            False,
            self.construct(grid, row, col, n),
            self.construct(grid, row, col + n, n),
            self.construct(grid, row + n, col, n),
            self.construct(grid, row + n, col + n, n),
        )

    def isLeaf(self, grid: List[List[int]], row: int, col: int, n: int):
        val = grid[row][col]
        for i in range(row, row + n):
            for j in range(col, col + n):
                if grid[i][j] != val:
                    return False
        return True


# https://leetcode.com/problems/construct-quad-tree/
