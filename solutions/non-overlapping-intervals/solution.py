from typing import List
from operator import itemgetter


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=itemgetter(1))
        count = 0
        prev = intervals[0][1]
        for start, end in intervals[1:]:
            if start < prev:
                count += 1
            else:
                prev = end

        return count


# https://leetcode.com/problems/non-overlapping-intervals/
