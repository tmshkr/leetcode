from typing import List


class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        idx2gaps = {0: 0}
        max_gaps = 0

        for r in wall:
            idx = 0
            for b in r[:-1]:
                idx += b
                idx2gaps[idx] = 1 + idx2gaps.get(idx, 0)
                max_gaps = max(max_gaps, idx2gaps[idx])

        return len(wall) - max_gaps


# https://leetcode.com/problems/brick-wall/
