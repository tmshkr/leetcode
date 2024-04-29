from typing import List
from heapq import heappop, heappush


class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        tasks = sorted([(t[0], t[1], i) for i, t in enumerate(tasks)])
        n = len(tasks)
        res = []
        heap = []
        i = 0
        time = 0

        while len(res) < n:
            while i < n and tasks[i][0] <= time:
                heappush(heap, (tasks[i][1], tasks[i][2]))
                i += 1
            if not heap:
                time = tasks[i][0]
            else:
                dur, idx = heappop(heap)
                res.append(idx)
                time += dur

        return res


# https://leetcode.com/problems/single-threaded-cpu/
