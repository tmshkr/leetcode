from typing import List
import heapq


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set()
        pq = [[grid[0][0], 0, 0]]  # (time/max-height, r, c)
        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        visit.add((0, 0))
        while pq:
            t, r, c = heapq.heappop(pq)
            if r == N - 1 and c == N - 1:
                return t
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if (
                    nr < 0
                    or nc < 0
                    or nr == N
                    or nc == N
                    or (nr, nc) in visit
                ):
                    continue
                visit.add((nr, nc))
                heapq.heappush(pq, [max(t, grid[nr][nc]), nr, nc])


# https://leetcode.com/problems/swim-in-rising-water/
