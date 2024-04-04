from typing import List


class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        if n <= 1:
            return 0

        graph = {}
        for u, v in edges:
            if u not in graph:
                graph[u] = []
            if v not in graph:
                graph[v] = []
            graph[u].append(v)
            graph[v].append(u)

        def dfs(node, prev):
            res = 0
            for neighbor in graph[node]:
                if neighbor == prev:
                    continue
                res += dfs(neighbor, node)
            if (res > 0 or hasApple[node]) and node != 0:
                res += 2
            return res

        return max(0, dfs(0, -1))


# https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
