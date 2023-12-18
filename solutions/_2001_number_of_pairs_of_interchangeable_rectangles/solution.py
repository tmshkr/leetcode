from typing import List


class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        map = {}  # {ratio: count}
        res = 0
        for w, h in rectangles:
            ratio = w / h
            if ratio in map:
                res += map[ratio]
                map[ratio] += 1
            else:
                map[ratio] = 1
        return res


# https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
