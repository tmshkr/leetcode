from typing import List
from heapq import heappop, heappush, heapify


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapify(stones)

        while len(stones) > 1:
            y = heappop(stones)
            x = heappop(stones)
            if x != y:
                heappush(stones, y - x)

        stones.append(0)
        return abs(stones[0])


# https://leetcode.com/problems/last-stone-weight/
