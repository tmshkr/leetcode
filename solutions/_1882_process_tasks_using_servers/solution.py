from typing import List
from heapq import heappush, heappop, heapify


class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        available = [(weight, idx) for idx, weight in enumerate(servers)]
        busy = []
        heapify(available)
        res = []
        time = 0
        j = 0
        while j < len(tasks):
            time = max(time, j)
            while busy and busy[0][0] <= time:
                _, weight, idx = heappop(busy)
                heappush(available, (weight, idx))
            if available:
                weight, idx = heappop(available)
                res.append(idx)
                heappush(busy, (time + tasks[j], weight, idx))
                j += 1
            else:
                time = busy[0][0]

        return res


# https://leetcode.com/problems/process-tasks-using-servers/
