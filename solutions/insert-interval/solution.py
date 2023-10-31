from typing import List


class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        res = []
        i = 0

        # add all intervals that end before newInterval starts
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            res.append(intervals[i])
            i += 1

        # merge all overlapping intervals with newInterval
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(intervals[i][0], newInterval[0])
            newInterval[1] = max(intervals[i][1], newInterval[1])
            i += 1

        res.append(newInterval)

        # add all remaining intervals
        while i < len(intervals):
            res.append(intervals[i])
            i += 1

        return res


# https://leetcode.com/problems/insert-interval/
