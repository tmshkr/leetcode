from typing import List
import heapq


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        pts = []
        for x, y in points:
            dist = (x ** 2) + (y ** 2)
            pts.append([dist, x, y])

        res = []
        heapq.heapify(pts)
        for i in range(k):
            dist, x, y = heapq.heappop(pts)
            res.append([x, y])
        return res


# https://leetcode.com/problems/k-closest-points-to-origin/
