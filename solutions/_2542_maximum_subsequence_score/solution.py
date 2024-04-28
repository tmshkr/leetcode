from typing import List
from heapq import heappush, heappop


class Solution:
    def maxScore(self, A: List[int], B: List[int], k: int) -> int:
        total = res = 0
        min_heap = []
        for a, b in sorted(list(zip(A, B)), key=lambda t: t[1], reverse=True):
            heappush(min_heap, a)
            total += a
            if len(min_heap) == k:
                res = max(res, total * b)
                total -= heappop(min_heap)

        return res


# https://leetcode.com/problems/maximum-subsequence-score/
